import { PrismaClient } from '../generated/prisma-client'
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