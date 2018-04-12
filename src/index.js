const Koa = require('koa');
const jwt = require('koa-jwt');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();


app.use(jwt({ secret: 'secret' }));

router.get('/', async ctx => {
	ctx.body = ctx.state.user; // Show the decoded jwt token content
});


app.use(router.routes());
app.listen(3000);