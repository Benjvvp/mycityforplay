const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const gameShema = Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mygame: {
        type: Boolean,
        required: true
    },
    stats: {
        download: {
            type: Number,
            default: 0,
            required: true
        },
        views: {
            type: Number,
            default: 0,
            required: true
        },
        stars: {
            type: Number,
            default: 0,
            required: true
        },
        comments: {
            type: Number,
            default: 0,
            required: true
        },
    }
});

module.exports = mongoose.model('games', gameShema)