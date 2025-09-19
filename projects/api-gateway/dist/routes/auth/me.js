import { authenticateToken } from '../../middleware/authenticate.js';
import { authService } from '../../services/auth.service.js';
export async function meRoutes(fastify) {
    fastify.get('/api/auth/me', {
        preHandler: authenticateToken,
        schema: {
            description: 'Get current authenticated user information',
            tags: ['Authentication'],
            security: [{ bearerAuth: [] }],
            response: {
                200: {
                    type: 'object',
                    properties: {
                        success: { type: 'boolean' },
                        data: {
                            type: 'object',
                            properties: {
                                user: {
                                    type: 'object',
                                    properties: {
                                        id: { type: 'string' },
                                        email: { type: 'string' },
                                        username: { type: 'string' },
                                        firstName: { type: 'string', nullable: true },
                                        lastName: { type: 'string', nullable: true },
                                        avatarUrl: { type: 'string', nullable: true },
                                        bio: { type: 'string', nullable: true },
                                        totalXp: { type: 'number' },
                                        currentLevel: { type: 'number' },
                                        emailVerified: { type: 'boolean' },
                                        createdAt: { type: 'string', format: 'date-time' }
                                    }
                                }
                            }
                        }
                    }
                },
                401: {
                    type: 'object',
                    properties: {
                        success: { type: 'boolean' },
                        error: { type: 'string' },
                        code: { type: 'string' }
                    }
                }
            }
        }
    }, async (request, reply) => {
        try {
            const userId = request.currentUser?.userId;
            if (!userId) {
                return reply.status(401).send({
                    success: false,
                    error: 'User not authenticated',
                    code: 'NOT_AUTHENTICATED'
                });
            }
            const user = await authService.getUserById(userId);
            if (!user) {
                return reply.status(401).send({
                    success: false,
                    error: 'User not found or account deactivated',
                    code: 'USER_NOT_FOUND'
                });
            }
            return reply.send({
                success: true,
                data: {
                    user: {
                        id: user.id,
                        email: user.email,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        avatarUrl: user.avatarUrl,
                        bio: user.bio,
                        totalXp: user.totalXp,
                        currentLevel: user.currentLevel,
                        emailVerified: user.emailVerified,
                        createdAt: user.createdAt
                    }
                }
            });
        }
        catch (error) {
            fastify.log.error(`Get user info error: ${error}`);
            return reply.status(500).send({
                success: false,
                error: 'Failed to retrieve user information',
                code: 'USER_INFO_ERROR'
            });
        }
    });
}
