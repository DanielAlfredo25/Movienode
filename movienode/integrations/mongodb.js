const mongoose = require('mongoose');
const config = require('../config/config');

module.exports = class DB {

    static connect() {
        return mongoose.connect(config. MONGODB_URI, {
            promiseLibrary: global.Promise,
            useNewUrlParser: true,
        });
    }
};