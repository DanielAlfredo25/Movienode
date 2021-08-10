const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    Title: {
        type: String,
        trim: true
    },
    Year: {
        type: Number,
        trim: true
    },
    Released: {
        type: String,
        trim: true
    },
    Genre: {
        type: String,
        trim: true
    },
    Director: {
        type: String,
        trim: true
    },
    Actors: {
        type: String,
        trim: true
    },
    Plot: {
        type: String,
        trim: true
    },
    Ratings: {
        type: String,
        trim: true
    }
}, {
    timestamps:true
});

module.exports = mongoose.model('Pelicula', schema, 'peliculas');
