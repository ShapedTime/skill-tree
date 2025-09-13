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