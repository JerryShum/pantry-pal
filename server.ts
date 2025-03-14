import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { serveStatic } from 'hono/bun';

const server = new Hono();

// Middleware that logs all requests
server.use('/*', logger());

// Middleware that serves static files
server.use('/*', serveStatic({ root: './frontend/dist' }));

server.get('/test', (c) => {
   return c.json({
      message: 'Hello World',
   });
});

export default server;
