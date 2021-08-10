const TaskModel = require('./pelicula.model');

module.exports = class Tasks {
    static create(ctx) {
        return TaskModel.create(ctx.request.body).then(ctx.ok, ctx.badRequest);
    }

    static list(ctx) {
        return TaskModel.find().exec().then(ctx.ok, ctx.badRequest);
    }

    static read(ctx) {
        return TaskModel.findById(ctx.params.id).then(ctx.ok, ctx.badRequest);
    }

    static update(ctx) {
        return TaskModel.findByIdAndUpdate(ctx.params.id, ctx.request.body, {
            safe:true,
            new: true
        }).then(ctx.ok, ctx.badRequest);
    }
}