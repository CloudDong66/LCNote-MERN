const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ArraySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Array_ = mongoose.model('array', ArraySchema);