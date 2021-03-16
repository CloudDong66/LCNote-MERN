const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const RecursionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Recursion = mongoose.model('recursion', RecursionSchema);