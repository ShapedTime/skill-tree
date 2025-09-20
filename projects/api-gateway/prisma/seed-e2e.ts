/**
 * E2E Test Data Seeding Script
 *
 * Creates test users and data for E2E testing
 * Designed to be idempotent - can be run multiple times safely
 */

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

// Test users for E2E testing
const TEST_USERS = [
  {
    email: 'test.user1@example.com',
    username: 'testuser1',
    password: 'TestPassword123!',
    displayName: 'Test User One',
  },
  {
    email: 'test.user2@example.com',
    username: 'testuser2',
    password: 'TestPassword456!',
    displayName: 'Test User Two',
  },
  {
    email: 'admin@example.com',
    username: 'testadmin',
    password: 'AdminPassword789!',
    displayName: 'Test Admin',
  },
];

async function cleanDatabase() {
  console.log('🧹 Cleaning existing test data...');

  // Delete in correct order due to foreign key constraints
  await prisma.refreshToken.deleteMany({
    where: {
      user: {
        email: {
          contains: '@example.com',
        },
      },
    },
  });

  await prisma.user.deleteMany({
    where: {
      email: {
        contains: '@example.com',
      },
    },
  });

  console.log('✅ Database cleaned');
}

async function seedUsers() {
  console.log('🌱 Seeding test users...');

  for (const userData of TEST_USERS) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = await prisma.user.upsert({
      where: { email: userData.email },
      update: {
        username: userData.username,
        password: hashedPassword,
        displayName: userData.displayName,
      },
      create: {
        email: userData.email,
        username: userData.username,
        password: hashedPassword,
        displayName: userData.displayName,
      },
    });

    console.log(`  ✅ Created/Updated user: ${user.username} (${user.email})`);
  }
}

async function main() {
  try {
    console.log('🚀 Starting E2E test data seeding...');
    console.log(`📍 Database: ${process.env.DATABASE_URL?.split('@')[1]?.split('/')[0] || 'unknown'}`);

    // Clean existing test data
    await cleanDatabase();

    // Seed test users
    await seedUsers();

    // Verify seeding
    const userCount = await prisma.user.count({
      where: {
        email: {
          contains: '@example.com',
        },
      },
    });

    console.log(`\n✨ E2E seeding complete! Created ${userCount} test users.`);
    console.log('\n📝 Test Credentials:');
    TEST_USERS.forEach(user => {
      console.log(`  - ${user.username}: ${user.password}`);
    });

  } catch (error) {
    console.error('❌ Error seeding E2E test data:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seed script
main();