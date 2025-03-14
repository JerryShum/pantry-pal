import server from './server';

Bun.serve({
   port: 3000,
   fetch: server.fetch,
});

console.log('Server running on http://localhost:3000');
