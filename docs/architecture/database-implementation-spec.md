# Database Implementation Specification
**Issue**: #4 Database Schema Design
**Author**: Software Architect
**Date**: 2025-09-14
**Status**: Ready for Implementation
**Assigned To**: Software Engineer

## Overview

This document provides a comprehensive technical specification for implementing the SkillTree database schema using PostgreSQL 15+ and Prisma ORM. The design addresses complex skill tree relationships, user progress tracking, and gamification features while ensuring type safety and performance at scale.

## Architecture Summary

### Core Design Principles
1. **Graph-Optimized Relationships** - Skill dependencies as directed acyclic graphs (DAGs)
2. **Performance-First Indexing** - Strategic indexes for common query patterns
3. **Type-Safe JSON Schemas** - Flexible content storage with compile-time safety
4. **Horizontal Scalability** - Partition-ready design for future growth
5. **Complete Audit Trail** - Full change tracking without performance impact

### Technology Stack
- **Database**: PostgreSQL 15.x with advanced JSON support
- **ORM**: Prisma 5.x with type-safe client generation
- **Migration System**: Prisma Migrate for version control
- **Connection Pooling**: PgBouncer for production performance
- **Development**: Docker PostgreSQL container

## Complete Prisma Schema

Create the following file: `projects/api-gateway/prisma/schema.prisma`

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
// USER MANAGEMENT & AUTHENTICATION
// =====================================

model User {
  id                String              @id @default(cuid())
  email             String              @unique
  username          String              @unique @db.VarChar(50)
  passwordHash      String
  firstName         String?             @db.VarChar(100)
  lastName          String?             @db.VarChar(100)
  avatarUrl         String?
  isActive          Boolean             @default(true)
  emailVerified     Boolean             @default(false)
  lastLoginAt       DateTime?

  // Relationships
  skillTreeProgress UserSkillTreeProgress[]
  skillProgress     UserSkillProgress[]
  achievements      UserAchievement[]
  sessions          UserSession[]
  profile          UserProfile?

  // Audit fields
  createdAt         DateTime            @default(now())
  updatedAt         DateTime            @updatedAt
  createdBy         String?
  updatedBy         String?

  @@index([email], name: "idx_user_email")
  @@index([username], name: "idx_user_username")
  @@index([isActive, lastLoginAt], name: "idx_user_activity")
  @@map("users")
}

model UserProfile {
  userId            String              @id
  bio               String?             @db.Text
  location          String?             @db.VarChar(200)
  website           String?
  timezone          String?             @default("UTC")
  learningGoals     String[]
  interests         String[]
  preferences       Json                @default("{}")

  // Gamification
  totalXp           Int                 @default(0)
  currentLevel      Int                 @default(1)
  currentStreak     Int                 @default(0)
  maxStreak         Int                 @default(0)
  lastActivityAt    DateTime?

  // Statistics
  skillsCompleted   Int                 @default(0)
  hoursLearned      Float               @default(0)
  treesStarted      Int                 @default(0)
  treesCompleted    Int                 @default(0)

  user              User                @relation(fields: [userId], references: [id], onDelete: Cascade)

  createdAt         DateTime            @default(now())
  updatedAt         DateTime            @updatedAt

  @@index([totalXp], name: "idx_profile_xp")
  @@index([currentLevel], name: "idx_profile_level")
  @@index([lastActivityAt], name: "idx_profile_activity")
  @@map("user_profiles")
}

// =====================================
// SKILL TREE ARCHITECTURE
// =====================================

model SkillCategory {
  id                String              @id @default(cuid())
  name              String              @unique @db.VarChar(100)
  slug              String              @unique @db.VarChar(100)
  description       String?             @db.Text
  color             String?             @db.VarChar(7) // Hex color code
  icon              String?             @db.VarChar(100)
  sortOrder         Int                 @default(0)
  isActive          Boolean             @default(true)

  skillTrees        SkillTree[]

  createdAt         DateTime            @default(now())
  updatedAt         DateTime            @updatedAt

  @@index([slug], name: "idx_category_slug")
  @@index([sortOrder], name: "idx_category_sort")
  @@map("skill_categories")
}

model SkillTree {
  id                String              @id @default(cuid())
  categoryId        String
  name              String              @db.VarChar(200)
  slug              String              @unique @db.VarChar(200)
  description       String?             @db.Text
  shortDescription  String?             @db.VarChar(300)

  // Metadata and configuration
  difficulty        DifficultyLevel     @default(BEGINNER)
  estimatedHours    Float?
  prerequisites     String[]            // Array of other skill tree IDs
  tags              String[]
  version           String              @default("1.0.0")

  // Visual configuration
  layoutConfig      Json                @default("{}")
  themeConfig       Json                @default("{}")

  // Content flags
  isPublished       Boolean             @default(false)
  isFeatured        Boolean             @default(false)
  isAiGenerated     Boolean             @default(false)

  // Relationships
  category          SkillCategory       @relation(fields: [categoryId], references: [id])
  skills            Skill[]
  userProgress      UserSkillTreeProgress[]

  // Audit fields
  createdAt         DateTime            @default(now())
  updatedAt         DateTime            @updatedAt
  createdBy         String?
  updatedBy         String?

  @@index([categoryId, isPublished], name: "idx_tree_category_published")
  @@index([slug], name: "idx_tree_slug")
  @@index([difficulty, isPublished], name: "idx_tree_difficulty")
  @@index([tags], type: Gin, name: "idx_tree_tags")
  @@index([prerequisites], type: Gin, name: "idx_tree_prerequisites")
  @@fulltext([name, description], name: "idx_tree_fulltext")
  @@map("skill_trees")
}

model Skill {
  id                String              @id @default(cuid())
  skillTreeId       String
  parentSkillId     String?             // For hierarchical skills within a tree

  // Core skill data
  name              String              @db.VarChar(200)
  shortName         String?             @db.VarChar(50)
  description       String?             @db.Text
  learningObjectives String[]

  // Skill type and metadata
  skillType         SkillType           @default(KNOWLEDGE)
  difficulty        DifficultyLevel     @default(BEGINNER)
  estimatedMinutes  Int?
  xpValue           Int                 @default(10)

  // Dependencies (graph relationships)
  dependencies      String[]            // Array of skill IDs (immediate prerequisites)
  dependents        String[]            // Array of skill IDs (skills that depend on this)

  // Visual positioning
  positionX         Float               @default(0)
  positionY         Float               @default(0)
  nodeSize          Int                 @default(1) // 1=small, 2=medium, 3=large

  // Content and resources
  content           Json?               // Rich content structure
  resources         Json?               // External links, videos, etc.
  assessments       Json?               // Quiz/assessment data

  // Status flags
  isActive          Boolean             @default(true)
  isOptional        Boolean             @default(false)
  isMilestone       Boolean             @default(false)

  // Relationships
  skillTree         SkillTree           @relation(fields: [skillTreeId], references: [id], onDelete: Cascade)
  parentSkill       Skill?              @relation("SkillHierarchy", fields: [parentSkillId], references: [id])
  childSkills       Skill[]             @relation("SkillHierarchy")
  userProgress      UserSkillProgress[]

  // Audit fields
  createdAt         DateTime            @default(now())
  updatedAt         DateTime            @updatedAt
  createdBy         String?
  updatedBy         String?

  @@index([skillTreeId, isActive], name: "idx_skill_tree_active")
  @@index([parentSkillId], name: "idx_skill_parent")
  @@index([dependencies], type: Gin, name: "idx_skill_dependencies")
  @@index([dependents], type: Gin, name: "idx_skill_dependents")
  @@index([skillType, difficulty], name: "idx_skill_type_difficulty")
  @@index([positionX, positionY], name: "idx_skill_position")
  @@index([isMilestone, isActive], name: "idx_skill_milestones")
  @@fulltext([name, description], name: "idx_skill_fulltext")
  @@map("skills")
}

// =====================================
// PROGRESS TRACKING
// =====================================

model UserSkillTreeProgress {
  id                String              @id @default(cuid())
  userId            String
  skillTreeId       String

  // Progress metrics
  status            TreeProgressStatus  @default(NOT_STARTED)
  progressPercent   Float               @default(0) // 0.0 to 100.0
  skillsCompleted   Int                 @default(0)
  totalSkills       Int                 @default(0)

  // Time tracking
  timeSpentMinutes  Int                 @default(0)
  startedAt         DateTime?
  lastActivityAt    DateTime?
  completedAt       DateTime?

  // Milestones and achievements
  milestonesReached String[]            // Array of milestone skill IDs
  currentPath       String[]            // Array of skill IDs representing learning path

  // Relationships
  user              User                @relation(fields: [userId], references: [id], onDelete: Cascade)
  skillTree         SkillTree           @relation(fields: [skillTreeId], references: [id], onDelete: Cascade)

  createdAt         DateTime            @default(now())
  updatedAt         DateTime            @updatedAt

  @@unique([userId, skillTreeId], name: "unique_user_tree_progress")
  @@index([userId, status], name: "idx_user_tree_status")
  @@index([skillTreeId, status], name: "idx_tree_user_status")
  @@index([lastActivityAt], name: "idx_tree_progress_activity")
  @@map("user_skill_tree_progress")
}

model UserSkillProgress {
  id                String              @id @default(cuid())
  userId            String
  skillId           String
  skillTreeId       String              // Denormalized for performance

  // Core progress data
  status            SkillProgressStatus @default(LOCKED)
  progressPercent   Float               @default(0) // 0.0 to 100.0

  // Time tracking
  timeSpentMinutes  Int                 @default(0)
  attemptsCount     Int                 @default(0)

  // Completion data
  completionMethod  CompletionMethod?
  completionScore   Float?              // For assessed skills
  evidenceData      Json?               // Proof of completion

  // Timestamps
  unlockedAt        DateTime?
  startedAt         DateTime?
  lastActivityAt    DateTime?
  completedAt       DateTime?

  // Learning analytics
  strugglingIndicators Json?            // Analytics for learning difficulty
  engagementScore   Float?             // 0.0 to 1.0 engagement metric

  // Relationships
  user              User                @relation(fields: [userId], references: [id], onDelete: Cascade)
  skill             Skill               @relation(fields: [skillId], references: [id], onDelete: Cascade)

  createdAt         DateTime            @default(now())
  updatedAt         DateTime            @updatedAt

  @@unique([userId, skillId], name: "unique_user_skill_progress")
  @@index([userId, status], name: "idx_user_skill_status")
  @@index([skillId, status], name: "idx_skill_user_status")
  @@index([skillTreeId, userId], name: "idx_tree_user_progress")
  @@index([lastActivityAt], name: "idx_skill_progress_activity")
  @@index([completedAt], name: "idx_skill_completion_time", map: "idx_skill_completion")
  @@map("user_skill_progress")
}

// =====================================
// GAMIFICATION & ACHIEVEMENTS
// =====================================

model Achievement {
  id                String              @id @default(cuid())
  name              String              @db.VarChar(200)
  description       String              @db.Text
  category          AchievementCategory @default(PROGRESS)

  // Achievement criteria
  criteria          Json                // Flexible criteria definition
  xpReward          Int                 @default(0)
  badgeIcon         String?
  badgeColor        String?             @db.VarChar(7)

  // Rarity and visibility
  rarity            AchievementRarity   @default(COMMON)
  isVisible         Boolean             @default(true)
  isActive          Boolean             @default(true)

  // Relationships
  userAchievements  UserAchievement[]

  createdAt         DateTime            @default(now())
  updatedAt         DateTime            @updatedAt

  @@index([category, isActive], name: "idx_achievement_category")
  @@index([rarity], name: "idx_achievement_rarity")
  @@map("achievements")
}

model UserAchievement {
  id                String              @id @default(cuid())
  userId            String
  achievementId     String

  // Achievement completion data
  earnedAt          DateTime            @default(now())
  progress          Float               @default(100) // For progressive achievements
  metadata          Json?               // Context about how it was earned

  // Relationships
  user              User                @relation(fields: [userId], references: [id], onDelete: Cascade)
  achievement       Achievement         @relation(fields: [achievementId], references: [id], onDelete: Cascade)

  @@unique([userId, achievementId], name: "unique_user_achievement")
  @@index([userId, earnedAt], name: "idx_user_achievement_date")
  @@index([achievementId], name: "idx_achievement_users")
  @@map("user_achievements")
}

// =====================================
// SESSION & ANALYTICS
// =====================================

model UserSession {
  id                String              @id @default(cuid())
  userId            String
  deviceInfo        Json?               // Browser, OS, etc.
  ipAddress         String?             @db.Inet

  // Session data
  startedAt         DateTime            @default(now())
  lastActivityAt    DateTime            @default(now())
  endedAt           DateTime?
  isActive          Boolean             @default(true)

  // Relationships
  user              User                @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId, isActive], name: "idx_user_session_active")
  @@index([lastActivityAt], name: "idx_session_activity")
  @@map("user_sessions")
}

// =====================================
// ENUMS
// =====================================

enum DifficultyLevel {
  BEGINNER
  INTERMEDIATE
  ADVANCED
  EXPERT
}

enum SkillType {
  KNOWLEDGE      // Theoretical understanding
  PRACTICAL      // Hands-on application
  PROJECT        // Applied project work
  ASSESSMENT     // Quiz or test
  MILESTONE      // Major achievement marker
}

enum TreeProgressStatus {
  NOT_STARTED
  IN_PROGRESS
  COMPLETED
  PAUSED
}

enum SkillProgressStatus {
  LOCKED         // Prerequisites not met
  AVAILABLE      // Can be started
  IN_PROGRESS    // Currently working on
  COMPLETED      // Successfully completed
  SKIPPED        // Optionally skipped
}

enum CompletionMethod {
  MANUAL         // User marked as complete
  ASSESSMENT     // Passed quiz/test
  PROJECT        // Submitted project
  TIME_BASED     // Spent required time
  EXTERNAL       // Verified externally
}

enum AchievementCategory {
  PROGRESS       // Skill completion milestones
  STREAK         // Consistency achievements
  EXPLORATION    // Trying new skill areas
  MASTERY        // Deep skill development
  SOCIAL         // Community engagement
  TIME           // Time-based achievements
}

enum AchievementRarity {
  COMMON
  UNCOMMON
  RARE
  LEGENDARY
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

### Step 4: Create Seed Data

Create file: `projects/api-gateway/prisma/seed.ts`

```typescript
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create skill categories
  const programmingCategory = await prisma.skillCategory.create({
    data: {
      name: 'Programming',
      slug: 'programming',
      description: 'Software development and programming languages',
      color: '#3B82F6',
      icon: 'code',
      sortOrder: 1,
    }
  })

  const webDevCategory = await prisma.skillCategory.create({
    data: {
      name: 'Web Development',
      slug: 'web-development',
      description: 'Frontend and backend web technologies',
      color: '#10B981',
      icon: 'globe',
      sortOrder: 2,
    }
  })

  // Create sample skill tree
  const frontendTree = await prisma.skillTree.create({
    data: {
      categoryId: webDevCategory.id,
      name: 'Frontend Web Development',
      slug: 'frontend-web-development',
      description: 'Complete guide to modern frontend development',
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

  // Create interconnected skills
  const htmlSkill = await prisma.skill.create({
    data: {
      skillTreeId: frontendTree.id,
      name: 'HTML Fundamentals',
      shortName: 'HTML',
      description: 'Learn the building blocks of web pages',
      learningObjectives: [
        'Understand HTML document structure',
        'Create semantic markup',
        'Use forms and input elements'
      ],
      skillType: 'KNOWLEDGE',
      difficulty: 'BEGINNER',
      estimatedMinutes: 300,
      xpValue: 50,
      dependencies: [],
      positionX: 0,
      positionY: 0,
      nodeSize: 1,
      isActive: true,
      isMilestone: true,
      content: {
        type: 'structured',
        modules: [
          {
            title: 'HTML Basics',
            type: 'article',
            estimatedMinutes: 60,
            resources: [
              {
                type: 'link',
                title: 'MDN HTML Basics',
                url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics'
              }
            ]
          }
        ]
      }
    }
  })

  const cssSkill = await prisma.skill.create({
    data: {
      skillTreeId: frontendTree.id,
      name: 'CSS Styling',
      shortName: 'CSS',
      description: 'Style and layout web pages',
      learningObjectives: [
        'Apply CSS selectors and properties',
        'Create responsive layouts',
        'Use Flexbox and Grid'
      ],
      skillType: 'PRACTICAL',
      difficulty: 'BEGINNER',
      estimatedMinutes: 480,
      xpValue: 75,
      dependencies: [htmlSkill.id],
      positionX: 200,
      positionY: 0,
      nodeSize: 2,
      isActive: true,
      content: {
        type: 'structured',
        modules: [
          {
            title: 'CSS Fundamentals',
            type: 'interactive',
            estimatedMinutes: 90,
            resources: []
          }
        ]
      }
    }
  })

  // Update dependents
  await prisma.skill.update({
    where: { id: htmlSkill.id },
    data: { dependents: [cssSkill.id] }
  })

  // Create sample user
  const testUser = await prisma.user.create({
    data: {
      email: 'test@skillTree.dev',
      username: 'testuser',
      passwordHash: await hash('password123', 10),
      firstName: 'Test',
      lastName: 'User',
      isActive: true,
      emailVerified: true,
    }
  })

  // Create user profile
  await prisma.userProfile.create({
    data: {
      userId: testUser.id,
      bio: 'Learning frontend development',
      timezone: 'UTC',
      learningGoals: ['Learn React', 'Build portfolio'],
      interests: ['web development', 'design'],
      totalXp: 0,
      currentLevel: 1,
    }
  })

  // Create sample achievements
  const firstSkillAchievement = await prisma.achievement.create({
    data: {
      name: 'First Steps',
      description: 'Complete your first skill',
      category: 'PROGRESS',
      criteria: {
        type: 'skill_completion_count',
        threshold: 1
      },
      xpReward: 25,
      badgeIcon: 'trophy',
      badgeColor: '#F59E0B',
      rarity: 'COMMON'
    }
  })

  console.log('✅ Database seeded successfully!')
  console.log(`Created categories: ${programmingCategory.name}, ${webDevCategory.name}`)
  console.log(`Created skill tree: ${frontendTree.name}`)
  console.log(`Created skills: ${htmlSkill.name}, ${cssSkill.name}`)
  console.log(`Created user: ${testUser.email}`)
  console.log(`Created achievement: ${firstSkillAchievement.name}`)
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
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

### Critical Indexes

The schema includes strategic indexes for:
- **User queries**: `(email)`, `(username)`, `(isActive, lastLoginAt)`
- **Skill tree queries**: `(categoryId, isPublished)`, `(slug)`
- **Progress tracking**: `(userId, status)`, `(skillId, status)`
- **Graph operations**: GIN indexes on `dependencies[]`, `dependents[]`
- **Search functionality**: Full-text indexes on names and descriptions

### Query Optimization Examples

**Efficient Skill Tree Loading**:
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

**Dependency Resolution Query**:
```typescript
// Check if user can unlock a skill
const canUnlock = await prisma.$queryRaw`
  WITH RECURSIVE skill_deps AS (
    SELECT id, dependencies, 1 as depth
    FROM skills
    WHERE id = ${skillId}

    UNION ALL

    SELECT s.id, s.dependencies, sd.depth + 1
    FROM skills s
    JOIN skill_deps sd ON s.id = ANY(sd.dependencies)
    WHERE sd.depth < 5
  )
  SELECT COUNT(*) as missing_count
  FROM skill_deps sd
  LEFT JOIN user_skill_progress usp ON (
    usp.skill_id = sd.id AND
    usp.user_id = ${userId} AND
    usp.status = 'COMPLETED'
  )
  WHERE usp.id IS NULL AND sd.depth > 1
`
```

## Error Handling and Validation

### Zod Schemas for JSON Fields

Create file: `src/types/validation.ts`

```typescript
import { z } from 'zod'

export const SkillContentSchema = z.object({
  type: z.enum(['structured', 'simple']),
  modules: z.array(z.object({
    title: z.string(),
    type: z.enum(['article', 'video', 'interactive', 'assessment']),
    estimatedMinutes: z.number(),
    resources: z.array(z.object({
      type: z.enum(['link', 'file', 'embed']),
      title: z.string(),
      url: z.string().url()
    }))
  })).optional()
})

export const AchievementCriteriaSchema = z.object({
  type: z.enum(['skill_completion_count', 'xp_threshold', 'streak_days']),
  threshold: z.number(),
  additionalParams: z.record(z.any()).optional()
})

export const ProgressEvidenceSchema = z.object({
  type: z.enum(['text', 'url', 'file', 'assessment_score']),
  content: z.string(),
  metadata: z.record(z.any()).optional()
})
```

### Database Utility Functions

Create file: `src/database/utils.ts`

```typescript
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error'] : ['error']
})

export async function validateSkillDependencies(skillId: string, dependencies: string[]): Promise<boolean> {
  // Check for circular dependencies
  const result = await prisma.$queryRaw<Array<{exists: boolean}>>`
    WITH RECURSIVE dep_check AS (
      SELECT ${skillId}::text as skill_id, 0 as depth
      UNION ALL
      SELECT unnest(s.dependencies) as skill_id, dc.depth + 1
      FROM skills s
      JOIN dep_check dc ON s.id = dc.skill_id
      WHERE dc.depth < 10
    )
    SELECT EXISTS(SELECT 1 FROM dep_check WHERE skill_id = ANY(${dependencies})) as exists
  `

  return !result[0]?.exists
}

export async function calculateTreeProgress(userId: string, skillTreeId: string) {
  const result = await prisma.$queryRaw<Array<{total: number, completed: number}>>`
    SELECT
      COUNT(*) as total,
      COUNT(usp.id) FILTER (WHERE usp.status = 'COMPLETED') as completed
    FROM skills s
    LEFT JOIN user_skill_progress usp ON (s.id = usp.skill_id AND usp.user_id = ${userId})
    WHERE s.skill_tree_id = ${skillTreeId} AND s.is_active = true
  `

  const stats = result[0]
  return {
    total: Number(stats.total),
    completed: Number(stats.completed),
    percentage: stats.total > 0 ? (Number(stats.completed) / Number(stats.total)) * 100 : 0
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

### Development Environment
- [ ] PostgreSQL 15+ running in Docker
- [ ] Prisma installed and configured
- [ ] Database schema applied successfully
- [ ] Seed data created and loaded
- [ ] All indexes created and verified

### Production Readiness
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

---

**Implementation Priority**: 🔴 **CRITICAL** - Required for all data-dependent features

**Estimated Completion**: 8 days following the detailed roadmap above

**Next Steps**: Begin with Prisma setup and schema creation, followed by seed data and basic testing

**Support**: Refer to this specification document for implementation guidance, escalate architectural questions to Software Architect