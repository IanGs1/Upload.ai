import { fastify } from 'fastify';

const app = fastify();

app.listen({
    port: 3333
}, () => console.log('HTTP server on: http://localhost:3333'));