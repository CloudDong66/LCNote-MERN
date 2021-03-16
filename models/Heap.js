const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const HeapSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Heap = mongoose.model('heap', HeapSchema);