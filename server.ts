import { Hono } from 'hono';
import { logger } from 'hono/logger';

const server = new Hono();

// Middleware that logs all requests
server.use('/*', logger());

server.get('/test', (c) => {
   return c.json({
      message: 'Hello World',
   });
});

export default server;
