const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    level: {
        type: Boolean,
        default: false,
        required: true
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);