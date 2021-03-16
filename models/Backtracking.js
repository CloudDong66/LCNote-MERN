const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const BacktrackingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Backtracking = mongoose.model('backtracking', BacktrackingSchema);