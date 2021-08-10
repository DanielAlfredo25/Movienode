const TaskController = require('./peliculas.controller');

module.exports = router => {
    router
        .get('./peliculas', TaskController.list)
        .post('/peliculas', TaskController.create)
        .get('/peliculas/:id', TaskController.read)
        .put('/peliculas/:id', TaskController.update)

};