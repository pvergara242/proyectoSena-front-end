const { Schema, model } = require('mongoose');

const NoteShema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

}, {
    timestamps: true
})

module.exports = model('Note', NoteShema);