import { z } from 'zod';
import { authService } from '../../services/auth.service.js';
const registerSchema = z.object({
    email: z
        .string()
        .email('Invalid email format')
        .min(1, 'Email is required')
        .max(255, 'Email must be less than 255 characters'),
    username: z
        .string()
        .min(3, 'Username must be at least 3 characters')
        .max(30, 'Username must be less than 30 characters')
        .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, underscores, and hyphens'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .max(128, 'Password must be less than 128 characters')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number')
});
export async function registerRoutes(fastify) {
    fastify.post('/api/auth/register', {
        schema: {
            description: 'Register a new user account',
            tags: ['Authentication'],
            body: {
                type: 'object',
                required: ['email', 'username', 'password'],
                properties: {
                    email: {
                        type: 'string',
                        format: 'email',
                        description: 'User email address'
                    },
                    username: {
                        type: 'string',
                        minLength: 3,
                        maxLength: 30,
                        pattern: '^[a-zA-Z0-9_-]+$',
                        description: 'Unique username'
                    },
                    password: {
                        type: 'string',
                        minLength: 8,
                        maxLength: 128,
                        description: 'Password (min 8 chars, must contain uppercase, lowercase, and number)'
                    }
                }
            },
            response: {
                201: {
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
                                        username: { type: 'string' }
                                    }
                                },
                                accessToken: {
                                    type: 'string',
                                    description: 'JWT access token (expires in 15 minutes)'
                                }
                            }
                        },
                        message: { type: 'string' }
                    }
                },
                400: {
                    type: 'object',
                    properties: {
                        success: { type: 'boolean' },
                        error: { type: 'string' },
                        code: { type: 'string' }
                    }
                },
                409: {
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
            const validationResult = registerSchema.safeParse(request.body);
            if (!validationResult.success) {
                return reply.status(400).send({
                    success: false,
                    error: 'Validation failed',
                    code: 'VALIDATION_ERROR',
                    details: validationResult.error.issues.map(issue => ({
                        field: issue.path.join('.'),
                        message: issue.message
                    }))
                });
            }
            const { email, username, password } = validationResult.data;
            const user = await authService.registerUser(email, username, password);
            const { accessToken, refreshToken } = authService.generateTokens(user.id);
            await authService.storeRefreshToken(user.id, refreshToken);
            reply.setCookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000,
                path: '/'
            });
            return reply.status(201).send({
                success: true,
                data: {
                    user: authService.userToAuthUser(user),
                    accessToken
                },
                message: 'Account created successfully'
            });
        }
        catch (error) {
            fastify.log.error(`Registration error: ${error}`);
            if (error instanceof Error) {
                if (error.message === 'Email already registered' || error.message === 'Username already taken') {
                    return reply.status(409).send({
                        success: false,
                        error: error.message,
                        code: 'CONFLICT'
                    });
                }
            }
            return reply.status(500).send({
                success: false,
                error: 'Registration failed. Please try again.',
                code: 'REGISTRATION_ERROR'
            });
        }
    });
}
