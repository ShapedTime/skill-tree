import { PrismaClient } from '../generated/prisma-client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create sample skill tree
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
      description: 'Style and layout web pages with CSS, including Flexbox and Grid',
      difficulty: 'BEGINNER',
      estimatedMinutes: 480,
      xpValue: 75,
      dependencies: [htmlSkill.id], // Depends on HTML
      positionX: 200,
      positionY: 0,
      isActive: true,
      content: {
        type: 'structured',
        modules: [
          {
            title: 'CSS Fundamentals',
            type: 'interactive',
            estimatedMinutes: 90
          },
          {
            title: 'Layout with Flexbox',
            type: 'practical',
            estimatedMinutes: 120
          }
        ]
      }
    }
  })

  const jsSkill = await prisma.skill.create({
    data: {
      skillTreeId: frontendTree.id,
      name: 'JavaScript Basics',
      description: 'Learn JavaScript fundamentals including variables, functions, and DOM manipulation',
      difficulty: 'INTERMEDIATE',
      estimatedMinutes: 600,
      xpValue: 100,
      dependencies: [htmlSkill.id, cssSkill.id], // Depends on both HTML and CSS
      positionX: 400,
      positionY: 0,
      isActive: true,
      isMilestone: true,
      content: {
        type: 'structured',
        modules: [
          {
            title: 'JavaScript Syntax',
            type: 'interactive',
            estimatedMinutes: 180
          },
          {
            title: 'DOM Manipulation',
            type: 'practical',
            estimatedMinutes: 240
          }
        ]
      }
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

  await prisma.userSkillProgress.create({
    data: {
      userId: testUser.id,
      skillId: cssSkill.id,
      skillTreeId: frontendTree.id,
      status: 'IN_PROGRESS',
      progressPercent: 60,
      timeSpentMinutes: 180,
      startedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      lastActivityAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    }
  })

  await prisma.userSkillProgress.create({
    data: {
      userId: testUser.id,
      skillId: jsSkill.id,
      skillTreeId: frontendTree.id,
      status: 'AVAILABLE', // Available since CSS is in progress (not completed yet)
      progressPercent: 0,
      timeSpentMinutes: 0,
    }
  })

  console.log('✅ Database seeded successfully!')
  console.log(`Created skill tree: ${frontendTree.name}`)
  console.log(`Created skills: ${htmlSkill.name}, ${cssSkill.name}, ${jsSkill.name}`)
  console.log(`Created user: ${testUser.email} with embedded profile`)
  console.log(`Created progress entries for skill tree learning path`)
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })