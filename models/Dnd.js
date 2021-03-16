const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const DndSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Dnd = mongoose.model('dnd', DndSchema);