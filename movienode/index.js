const Koa = require('koa');
const Router = require('koa-router');
const respond =  require('koa-respond');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const config = require('./config/config');  

const app = new Koa();
const router = new Router();

const db = require('./integrations/mongodb');
db.connect();

app.use(respond());
app.use(cors());
app.use(bodyParser());

require('./modules/peliculas/peliculas.router')(router);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.PORT, () => {
    console.log('KOA esta funcionando en el puerto', config.PORT);
});