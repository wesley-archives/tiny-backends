import Fastify from 'fastify';

const server = Fastify();
const PORT = process.env.PORT || 3000;

// routes
server.get('/', async (req, res) => {
    res.send('🧙‍♂️ Welcome to the magical server!');
});

// server
server.listen({ port: PORT, host: 'localhost' }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`🧙‍♂️ The magical server is conjured up and listening at ${address}!`);
});
