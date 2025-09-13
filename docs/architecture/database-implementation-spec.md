# Database Implementation Specification
**Issue**: #4 Database Schema Design
**Author**: Software Architect
**Date**: 2025-09-14
**Status**: MVP Implementation Complete (PR #29)
**Implemented By**: Software Engineer (PR #29)

## Overview

This document provides the technical specification for the SkillTree database schema MVP implementation using PostgreSQL 15+ and Prisma ORM. The design focuses on essential skill tree relationships and user progress tracking, simplified for the 8-10 week timeline while maintaining a foundation for future enhancements.

## Architecture Summary

### MVP Design Principles
1. **Simplified Schema** - 4 core models for essential functionality
2. **Essential Dependencies** - Array-based skill dependencies for MVP
3. **Embedded Profile Data** - User profile integrated into User model
4. **Strategic Indexing** - 12 focused indexes for core query patterns
5. **Future-Ready Foundation** - Extensible design for post-MVP enhancements

### Technology Stack
- **Database**: PostgreSQL 15.x with advanced JSON support
- **ORM**: Prisma 5.x with type-safe client generation
- **Migration System**: Prisma Migrate for version control
- **Connection Pooling**: PgBouncer for production performance
- **Development**: Docker PostgreSQL container

## MVP Prisma Schema (Implemented)

The current implementation focuses on 4 core models for MVP functionality:

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../generated/prisma-client"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// =====================================
// SIMPLIFIED MVP SCHEMA - 4 MODELS
// =====================================

// User model with embedded profile data
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  username      String    @unique @db.VarChar(50)
  passwordHash  String

  // Basic profile information
  firstName     String?   @db.VarChar(100)
  lastName      String?   @db.VarChar(100)
  avatarUrl     String?
  bio           String?   @db.Text
  timezone      String?   @default("UTC")

  // Gamification (embedded from UserProfile)
  totalXp       Int       @default(0)
  currentLevel  Int       @default(1)

  // Status flags
  isActive      Boolean   @default(true)
  emailVerified Boolean   @default(false)
  lastLoginAt   DateTime?

  // Relationships
  skillProgress UserSkillProgress[]

  // Audit fields
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@index([email], name: "idx_user_email")
  @@index([username], name: "idx_user_username")
  @@map("users")
}

// Skill Tree model (simplified)
model SkillTree {
  id               String  @id @default(cuid())
  name             String  @db.VarChar(200)
  slug             String  @unique @db.VarChar(200)
  description      String? @db.Text
  shortDescription String? @db.VarChar(300)

  // Metadata
  difficulty       DifficultyLevel @default(BEGINNER)
  estimatedHours   Float?
  tags             String[]

  // Visual configuration (simplified)
  layoutConfig     Json    @default("{}")

  // Status flags
  isPublished      Boolean @default(false)
  isFeatured       Boolean @default(false)

  // Relationships
  skills           Skill[]
  userProgress     UserSkillProgress[]

  // Audit fields
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt

  @@index([slug], name: "idx_tree_slug")
  @@index([isPublished], name: "idx_tree_published")
  @@map("skill_trees")
}

// Skill model (simplified with dependency array)
model Skill {
  id               String  @id @default(cuid())
  skillTreeId      String

  // Core skill data
  name             String  @db.VarChar(200)
  description      String? @db.Text

  // Skill metadata
  difficulty       DifficultyLevel @default(BEGINNER)
  estimatedMinutes Int?
  xpValue          Int     @default(10)

  // Simple dependency management
  dependencies     String[] // Array of skill IDs that must be completed first

  // Visual positioning
  positionX        Float   @default(0)
  positionY        Float   @default(0)

  // Content (simplified)
  content          Json?   // Rich content structure

  // Status flags
  isActive         Boolean @default(true)
  isMilestone      Boolean @default(false)

  // Relationships
  skillTree        SkillTree @relation(fields: [skillTreeId], references: [id], onDelete: Cascade)
  userProgress     UserSkillProgress[]

  // Audit fields
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt

  @@index([skillTreeId, isActive], name: "idx_skill_tree_active")
  @@index([dependencies], type: Gin, name: "idx_skill_dependencies")
  @@map("skills")
}

// User progress tracking (simplified)
model UserSkillProgress {
  id               String   @id @default(cuid())
  userId           String
  skillId          String
  skillTreeId      String   // Denormalized for performance

  // Progress data
  status           SkillProgressStatus @default(LOCKED)
  progressPercent  Float    @default(0) // 0.0 to 100.0

  // Time tracking
  timeSpentMinutes Int      @default(0)

  // Completion data
  completionScore  Float?   // For assessed skills

  // Timestamps
  startedAt        DateTime?
  completedAt      DateTime?
  lastActivityAt   DateTime?

  // Relationships
  user             User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  skill            Skill    @relation(fields: [skillId], references: [id], onDelete: Cascade)
  skillTree        SkillTree @relation(fields: [skillTreeId], references: [id], onDelete: Cascade)

  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt

  @@unique([userId, skillId], name: "unique_user_skill_progress")
  @@index([userId, status], name: "idx_user_skill_status")
  @@index([skillTreeId, userId], name: "idx_tree_user_progress")
  @@map("user_skill_progress")
}

// =====================================
// ENUMS (Essential only)
// =====================================

enum DifficultyLevel {
  BEGINNER
  INTERMEDIATE
  ADVANCED
  EXPERT
}

enum SkillProgressStatus {
  LOCKED         // Prerequisites not met
  AVAILABLE      // Can be started
  IN_PROGRESS    // Currently working on
  COMPLETED      // Successfully completed
}
```

## Implementation Steps

### Step 1: Initialize Prisma

```bash
cd projects/api-gateway

# Install dependencies
npm install prisma @prisma/client pg @types/pg bcrypt @types/bcrypt zod

# Initialize Prisma (if not already done)
npx prisma init
```

### Step 2: Configure Environment Variables

Create/update `.env` file:
```bash
# Database connection
DATABASE_URL="postgresql://skillTree:password@localhost:5432/skillTree_db?schema=public"

# Development overrides
NODE_ENV="development"
```

### Step 3: Apply Schema and Generate Client

```bash
# Apply schema to database
npx prisma db push --accept-data-loss

# Generate Prisma client
npx prisma generate

# Create initial migration
npx prisma migrate dev --name init_database_schema
```

### Step 4: Create MVP Seed Data

**File**: `projects/api-gateway/prisma/seed.ts` (Implemented)

The seed file creates a simplified dataset for MVP testing:

```typescript
import { PrismaClient } from '../generated/prisma-client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create sample skill tree (no categories in MVP)
  const frontendTree = await prisma.skillTree.create({
    data: {
      name: 'Frontend Web Development',
      slug: 'frontend-web-development',
      description: 'Complete guide to modern frontend development with HTML, CSS, JavaScript, and React',
      shortDescription: 'Learn HTML, CSS, JavaScript, and React',
      difficulty: 'BEGINNER',
      estimatedHours: 120,
      tags: ['html', 'css', 'javascript', 'react'],
      isPublished: true,
      isFeatured: true,
      layoutConfig: {
        theme: 'modern',
        nodeSpacing: 150,
        levelHeight: 200
      }
    }
  })

  // Create interconnected skills with simplified structure
  const htmlSkill = await prisma.skill.create({
    data: {
      skillTreeId: frontendTree.id,
      name: 'HTML Fundamentals',
      description: 'Learn the building blocks of web pages with semantic markup and forms',
      difficulty: 'BEGINNER',
      estimatedMinutes: 300,
      xpValue: 50,
      dependencies: [], // No prerequisites - starting skill
      positionX: 0,
      positionY: 0,
      isActive: true,
      isMilestone: true,
      content: {
        type: 'structured',
        modules: [/* ... */]
      }
    }
  })

  const cssSkill = await prisma.skill.create({
    data: {
      skillTreeId: frontendTree.id,
      name: 'CSS Styling',
      description: 'Style and layout web pages with CSS, including Flexbox and Grid',
      difficulty: 'BEGINNER',
      estimatedMinutes: 480,
      xpValue: 75,
      dependencies: [htmlSkill.id], // Depends on HTML
      positionX: 200,
      positionY: 0,
      isActive: true,
      content: { /* ... */ }
    }
  })

  // Create sample user with embedded profile data
  const testUser = await prisma.user.create({
    data: {
      email: 'test@skillTree.dev',
      username: 'testuser',
      passwordHash: await hash('password123', 10),
      firstName: 'Test',
      lastName: 'User',
      bio: 'Learning frontend development to build amazing web applications',
      timezone: 'UTC',
      totalXp: 0,
      currentLevel: 1,
      isActive: true,
      emailVerified: true,
    }
  })

  // Create sample progress entries
  await prisma.userSkillProgress.create({
    data: {
      userId: testUser.id,
      skillId: htmlSkill.id,
      skillTreeId: frontendTree.id,
      status: 'COMPLETED',
      progressPercent: 100,
      timeSpentMinutes: 250,
      completionScore: 95,
      startedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
      completedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
      lastActivityAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    }
  })

  console.log('✅ Database seeded successfully!')
  console.log(`Created skill tree: ${frontendTree.name}`)
  console.log(`Created user: ${testUser.email} with embedded profile`)
  console.log(`Created progress entries for skill tree learning path`)
}
```

### Step 5: Configure Package.json Scripts

Add to `package.json`:
```json
{
  "scripts": {
    "db:generate": "prisma generate",
    "db:migrate": "prisma migrate dev",
    "db:push": "prisma db push",
    "db:seed": "tsx prisma/seed.ts",
    "db:reset": "prisma migrate reset --force",
    "db:studio": "prisma studio"
  }
}
```

### Step 6: Run Initial Setup

```bash
# Seed the database
npm run db:seed

# Open Prisma Studio to verify
npm run db:studio
```

## Performance Optimization

### MVP Index Strategy

The simplified schema includes 12 strategic indexes for core operations:
- **User queries**: `idx_user_email`, `idx_user_username`
- **Skill tree queries**: `idx_tree_slug`, `idx_tree_published`
- **Skill queries**: `idx_skill_tree_active`, GIN index on `idx_skill_dependencies`
- **Progress tracking**: `idx_user_skill_status`, `idx_tree_user_progress`
- **Unique constraints**: `unique_user_skill_progress` for data integrity

### Query Optimization Examples

**Efficient MVP Skill Tree Loading**:
```typescript
const skillTreeWithProgress = await prisma.skillTree.findUnique({
  where: { slug: 'frontend-web-development' },
  include: {
    skills: {
      where: { isActive: true },
      include: {
        userProgress: {
          where: { userId: currentUserId }
        }
      },
      orderBy: [
        { positionY: 'asc' },
        { positionX: 'asc' }
      ]
    },
    userProgress: {
      where: { userId: currentUserId }
    }
  }
})
```

**Simplified Dependency Check (MVP)**:
```typescript
// Check if user can unlock a skill (simplified for MVP)
async function canUnlockSkill(userId: string, skillId: string): Promise<boolean> {
  const skill = await prisma.skill.findUnique({
    where: { id: skillId },
    select: { dependencies: true }
  })

  if (!skill?.dependencies.length) return true

  // Check if all dependencies are completed
  const completedCount = await prisma.userSkillProgress.count({
    where: {
      userId,
      skillId: { in: skill.dependencies },
      status: 'COMPLETED'
    }
  })

  return completedCount === skill.dependencies.length
}
```

## Error Handling and Validation

### Zod Schemas for JSON Fields

Create file: `src/types/validation.ts`

```typescript
import { z } from 'zod'

// MVP schemas focus on essential validation
export const SkillContentSchema = z.object({
  type: z.enum(['structured', 'simple']),
  modules: z.array(z.object({
    title: z.string(),
    type: z.enum(['article', 'video', 'interactive', 'practical']),
    estimatedMinutes: z.number().optional()
  })).optional()
})

export const LayoutConfigSchema = z.object({
  theme: z.string().optional(),
  nodeSpacing: z.number().optional(),
  levelHeight: z.number().optional()
})
```

### Database Utility Functions

Create file: `src/database/utils.ts`

```typescript
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error'] : ['error']
})

// Simplified MVP utility functions
export async function validateSkillDependencies(skillId: string, dependencies: string[]): Promise<boolean> {
  // Simple circular dependency check for MVP
  if (dependencies.includes(skillId)) return false

  // Check if dependencies exist in same skill tree
  const skill = await prisma.skill.findUnique({ where: { id: skillId } })
  if (!skill) return false

  const validDeps = await prisma.skill.count({
    where: {
      id: { in: dependencies },
      skillTreeId: skill.skillTreeId,
      isActive: true
    }
  })

  return validDeps === dependencies.length
}

export async function calculateTreeProgress(userId: string, skillTreeId: string) {
  const [totalSkills, completedProgress] = await Promise.all([
    prisma.skill.count({
      where: { skillTreeId, isActive: true }
    }),
    prisma.userSkillProgress.count({
      where: {
        userId,
        skillTreeId,
        status: 'COMPLETED'
      }
    })
  ])

  return {
    total: totalSkills,
    completed: completedProgress,
    percentage: totalSkills > 0 ? (completedProgress / totalSkills) * 100 : 0
  }
}
```

## Testing Strategy

### Unit Tests for Database Operations

Create file: `src/database/__tests__/operations.test.ts`

```typescript
import { describe, expect, test, beforeAll, afterAll } from '@jest/globals'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

describe('Database Operations', () => {
  beforeAll(async () => {
    // Setup test data
  })

  afterAll(async () => {
    // Cleanup test data
    await prisma.$disconnect()
  })

  test('should create skill with dependencies', async () => {
    // Test skill creation with valid dependencies
  })

  test('should prevent circular dependencies', async () => {
    // Test circular dependency validation
  })

  test('should calculate progress correctly', async () => {
    // Test progress calculation logic
  })
})
```

## Security Considerations

### Row Level Security (Future Enhancement)

```sql
-- Enable RLS on sensitive tables
ALTER TABLE user_skill_progress ENABLE ROW LEVEL SECURITY;

-- Create policy for user data access
CREATE POLICY user_progress_policy ON user_skill_progress
FOR ALL TO app_user
USING (user_id = current_setting('app.current_user_id')::text);
```

### Input Validation

Always validate user inputs against schemas:
```typescript
import { SkillContentSchema } from '../types/validation'

export async function updateSkillContent(skillId: string, content: unknown) {
  // Validate JSON content
  const validatedContent = SkillContentSchema.parse(content)

  return await prisma.skill.update({
    where: { id: skillId },
    data: { content: validatedContent }
  })
}
```

## Deployment Checklist

### MVP Development (Completed)
- [x] PostgreSQL 15+ running in Docker
- [x] Prisma installed and configured
- [x] Simplified 4-model schema applied
- [x] MVP seed data created and loaded
- [x] Essential 12 indexes created and verified
- [x] Basic validation schemas implemented

### Future Production Readiness
- [ ] Connection pooling configured (PgBouncer)
- [ ] Database backups automated
- [ ] Monitoring and alerting set up
- [ ] Migration rollback procedures tested
- [ ] Performance benchmarks established

## Monitoring and Maintenance

### Key Metrics to Track
- Query execution times (especially recursive CTEs)
- Index usage statistics
- Connection pool utilization
- Database size growth
- User activity patterns

### Regular Maintenance Tasks
- Weekly: ANALYZE and VACUUM operations
- Monthly: Review slow query logs
- Quarterly: Index usage analysis and optimization
- As needed: Schema migrations and updates

## Future Enhancements

The following features were deferred from the MVP implementation to focus on the 8-10 week timeline:

### Deferred Models (Post-MVP)
- **UserProfile**: Separate profile table with detailed gamification data
- **SkillCategory**: Skill tree categorization and organization
- **Achievement**: Gamification badges and rewards system
- **UserSession**: Session tracking and analytics
- **UserAchievement**: User-earned achievements relationship

### Enhanced Features
- **Complex Dependencies**: Recursive dependency validation
- **Advanced Progress**: Tree-level progress tracking
- **Full-Text Search**: Comprehensive search across content
- **Audit Logging**: Complete change tracking
- **Performance Analytics**: Advanced user engagement metrics

### Migration Strategy
The current schema is designed to be extensible. Future enhancements can be added through:
1. New model additions (non-breaking)
2. Field additions to existing models
3. Enhanced indexing strategies
4. Data migration scripts for profile extraction

---

**Implementation Status**: ✅ **COMPLETE** - MVP implemented in PR #29

**Timeline**: Completed within 8-10 week MVP scope

**Architecture Decision**: Simplified to 4 core models focusing on essential skill tree functionality

**Future Work**: Enhanced features planned for post-MVP iterations