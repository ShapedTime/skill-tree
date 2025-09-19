import { PrismaClient } from '../../generated/prisma-client/index.js';
export declare const prisma: PrismaClient<{
    log: ("query" | "error")[];
}, "query" | "error", import("../../generated/prisma-client/runtime/library.js").DefaultArgs>;
export declare function validateSkillDependencies(skillId: string, dependencies: string[]): Promise<boolean>;
export declare function calculateTreeProgress(userId: string, skillTreeId: string): Promise<{
    total: number;
    completed: number;
    percentage: number;
}>;
