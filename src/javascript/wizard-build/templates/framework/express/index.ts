import express, { Request, Response } from 'express';

const server = express();
const PORT = process.env.PORT || 3000;

// middlewares
server.use(express.json());

// routes
server.get('/', (req: Request, res: Response) => {
    res.send('🧙‍♂️ Welcome to the magical server!');
});

// server
server.listen(PORT, () => {
    console.log(`🧙‍♂️ The magical server is conjured up and listening at http://localhost:${PORT}!`);
});
