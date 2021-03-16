const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const DpSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Dp = mongoose.model('dp', DpSchema);