const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const HashtableSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Hashtable = mongoose.model('hashtable', HashtableSchema);