import { authService } from '../../services/auth.service.js';
export async function refreshRoutes(fastify) {
    fastify.post('/api/auth/refresh', {
        schema: {
            description: 'Refresh access token using refresh token cookie',
            tags: ['Authentication'],
            response: {
                200: {
                    type: 'object',
                    properties: {
                        success: { type: 'boolean' },
                        data: {
                            type: 'object',
                            properties: {
                                accessToken: {
                                    type: 'string',
                                    description: 'New JWT access token (expires in 15 minutes)'
                                }
                            }
                        },
                        message: { type: 'string' }
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
            const refreshToken = request.cookies?.refreshToken;
            if (!refreshToken) {
                return reply.status(401).send({
                    success: false,
                    error: 'Refresh token missing',
                    code: 'MISSING_REFRESH_TOKEN'
                });
            }
            const user = await authService.validateRefreshToken(refreshToken);
            if (!user) {
                reply.clearCookie('refreshToken', { path: '/' });
                return reply.status(401).send({
                    success: false,
                    error: 'Invalid or expired refresh token',
                    code: 'INVALID_REFRESH_TOKEN'
                });
            }
            const { accessToken } = authService.generateTokens(user.id);
            return reply.send({
                success: true,
                data: {
                    accessToken
                },
                message: 'Token refreshed successfully'
            });
        }
        catch (error) {
            fastify.log.error(`Token refresh error: ${error}`);
            reply.clearCookie('refreshToken', { path: '/' });
            return reply.status(401).send({
                success: false,
                error: 'Token refresh failed',
                code: 'REFRESH_ERROR'
            });
        }
    });
}
