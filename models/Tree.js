const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const TreeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Tree = mongoose.model('tree', TreeSchema);