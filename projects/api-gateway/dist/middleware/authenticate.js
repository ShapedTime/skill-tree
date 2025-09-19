import { authService } from '../services/auth.service.js';
export async function authenticateToken(request, reply) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return reply.status(401).send({
            success: false,
            error: 'Authorization header missing',
            code: 'MISSING_AUTH_HEADER'
        });
    }
    const tokenParts = authHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return reply.status(401).send({
            success: false,
            error: 'Invalid authorization header format. Expected: Bearer <token>',
            code: 'INVALID_AUTH_FORMAT'
        });
    }
    const token = tokenParts[1];
    if (!token) {
        return reply.status(401).send({
            success: false,
            error: 'Access token required',
            code: 'MISSING_TOKEN'
        });
    }
    try {
        const payload = authService.validateAccessToken(token);
        if (!payload) {
            return reply.status(401).send({
                success: false,
                error: 'Invalid or expired access token',
                code: 'INVALID_TOKEN'
            });
        }
        const user = await authService.getUserById(payload.userId);
        if (!user) {
            return reply.status(401).send({
                success: false,
                error: 'User not found or inactive',
                code: 'USER_NOT_FOUND'
            });
        }
        request.currentUser = { userId: payload.userId };
    }
    catch (error) {
        request.log.error(`Authentication error: ${error}`);
        return reply.status(401).send({
            success: false,
            error: 'Token validation failed',
            code: 'TOKEN_VALIDATION_ERROR'
        });
    }
}
export async function optionalAuthentication(request, reply) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return;
    }
    const tokenParts = authHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return;
    }
    const token = tokenParts[1];
    if (!token) {
        return;
    }
    try {
        const payload = authService.validateAccessToken(token);
        if (payload) {
            const user = await authService.getUserById(payload.userId);
            if (user) {
                request.currentUser = { userId: payload.userId };
            }
        }
    }
    catch (error) {
        request.log.warn(`Optional authentication failed: ${error}`);
    }
}
