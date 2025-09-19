import { z } from 'zod';
export declare const SkillContentSchema: z.ZodObject<{
    type: z.ZodEnum<["structured", "simple"]>;
    modules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        type: z.ZodEnum<["article", "video", "interactive", "assessment"]>;
        estimatedMinutes: z.ZodNumber;
        resources: z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["link", "file", "embed"]>;
            title: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "link" | "file" | "embed";
            url: string;
            title: string;
        }, {
            type: "link" | "file" | "embed";
            url: string;
            title: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "article" | "video" | "interactive" | "assessment";
        title: string;
        estimatedMinutes: number;
        resources: {
            type: "link" | "file" | "embed";
            url: string;
            title: string;
        }[];
    }, {
        type: "article" | "video" | "interactive" | "assessment";
        title: string;
        estimatedMinutes: number;
        resources: {
            type: "link" | "file" | "embed";
            url: string;
            title: string;
        }[];
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "structured" | "simple";
    modules?: {
        type: "article" | "video" | "interactive" | "assessment";
        title: string;
        estimatedMinutes: number;
        resources: {
            type: "link" | "file" | "embed";
            url: string;
            title: string;
        }[];
    }[] | undefined;
}, {
    type: "structured" | "simple";
    modules?: {
        type: "article" | "video" | "interactive" | "assessment";
        title: string;
        estimatedMinutes: number;
        resources: {
            type: "link" | "file" | "embed";
            url: string;
            title: string;
        }[];
    }[] | undefined;
}>;
export declare const AchievementCriteriaSchema: z.ZodObject<{
    type: z.ZodEnum<["skill_completion_count", "xp_threshold", "streak_days"]>;
    threshold: z.ZodNumber;
    additionalParams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    type: "skill_completion_count" | "xp_threshold" | "streak_days";
    threshold: number;
    additionalParams?: Record<string, any> | undefined;
}, {
    type: "skill_completion_count" | "xp_threshold" | "streak_days";
    threshold: number;
    additionalParams?: Record<string, any> | undefined;
}>;
export declare const ProgressEvidenceSchema: z.ZodObject<{
    type: z.ZodEnum<["text", "url", "file", "assessment_score"]>;
    content: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    type: "url" | "file" | "text" | "assessment_score";
    content: string;
    metadata?: Record<string, any> | undefined;
}, {
    type: "url" | "file" | "text" | "assessment_score";
    content: string;
    metadata?: Record<string, any> | undefined;
}>;
