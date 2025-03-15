import { Hono } from 'hono';

const dummyData = [
   { id: 1, name: 'John Doe', age: 30 },
   { id: 2, name: 'Jane Doe', age: 25 },
   { id: 3, name: 'Bob Smith', age: 40 },
];

export const testRoute = new Hono()
   .get('/', (c) => {
      return c.json({
         message: 'You are now in the new test route',
      });
   })
   .get('/data', (c) => {
      return c.json(dummyData);
   });
