const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const GreedySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Greedy = mongoose.model('greedy', GreedySchema);