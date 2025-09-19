import { FastifyRequest, FastifyReply } from 'fastify';
export declare function authenticateToken(request: FastifyRequest, reply: FastifyReply): Promise<void>;
export declare function optionalAuthentication(request: FastifyRequest, reply: FastifyReply): Promise<void>;
