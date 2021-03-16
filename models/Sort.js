const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const SortSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Sort = mongoose.model('sort', SortSchema);