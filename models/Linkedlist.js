const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const LinkedlistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Linkedlist = mongoose.model('linkedlist', LinkedlistSchema);