import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { serveStatic } from 'hono/bun';
import { testRoute } from './routes/test';

const server = new Hono();

// Middleware that logs all requests
server.use('/*', logger());

// Middleware that serves static files
server.use('/*', serveStatic({ root: './frontend/dist' }));

const apiRoutes = server.basePath('/api').route('/test', testRoute);

export default server;
