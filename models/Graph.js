const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const GraphSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Graph = mongoose.model('graph', GraphSchema);