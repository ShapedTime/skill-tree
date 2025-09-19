import { registerRoutes } from './register.js';
import { loginRoutes } from './login.js';
import { refreshRoutes } from './refresh.js';
import { logoutRoutes } from './logout.js';
import { meRoutes } from './me.js';
export async function authRoutes(fastify) {
    await registerRoutes(fastify);
    await loginRoutes(fastify);
    await refreshRoutes(fastify);
    await logoutRoutes(fastify);
    await meRoutes(fastify);
}
