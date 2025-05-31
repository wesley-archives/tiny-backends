import Fastify, { FastifyRequest, FastifyReply } from 'fastify';

const server = Fastify();
const PORT = process.env.PORT || 3000;

// routes
server.get('/', async (req: FastifyRequest, res: FastifyReply) => {
    res.send('🧙‍♂️ Welcome to the magical server!');
});

// server
server.listen({ port: Number(PORT), host: 'localhost' }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`🧙‍♂️ The magical server is conjured up and listening at ${address}!`);
});
