import { PrismaClient } from '../../generated/prisma-client/index.js'

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