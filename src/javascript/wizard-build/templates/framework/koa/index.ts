import Koa, { Context } from 'koa';
import Router from 'koa-router';

const server = new Koa();
const router = new Router();
const PORT = process.env.PORT || 3000;

// routes
router.get('/', async (ctx: Context) => {
    ctx.body = '🧙‍♂️ Welcome to the magical server!';
});

// apply routes to the server
server.use(router.routes());
server.use(router.allowedMethods());

// server
server.listen(PORT, () => {
    console.log(`🧙‍♂️ The magical server is conjured up and listening at http://localhost:${PORT}!`);
});
