const Express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const authRouter = require('./src/user-router');
const PORT = process.env.PORT || 3000;

let server =  new Express();

//header reponses
server.use(helmet.hidePoweredBy());
server.use(helmet.noSniff());
server.use(helmet.contentSecurityPolicy({
    directives: {
        'default-src': helmet.contentSecurityPolicy.dangerouslyDisableDefaultSrc,
        'frame-ancestors': 'none',
    },
}));
server.use(helmet.frameguard({
    action: 'deny',
}))

server.use(bodyParser.json());
server.use((req, res, next) => {
    console.log('----- reqqq -----', req.url, req.body);
    next();
});

server.use('/user', authRouter);

server.listen(PORT, () => {
    console.log('Express server listening at port : ', PORT)
})