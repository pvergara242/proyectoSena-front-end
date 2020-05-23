const notesCtrl = {};
const Note = require('../models/note');

notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};
// crear las notas y renderiza una nueva pagina 
notesCtrl.createNewNote = async(req, res) => {
    const { title, description } = req.body;
    const newNote = new note({
        title,
        description
    });
    await newNote.save();
    res.send('new Note');
};

notesCtrl.renderNotes = async(req, res) => {
    const notes = await Note.find();
    res.render('notes/all-notes', { notes });
};
// editar las notas 
notesCtrl.renderEditForm = (req, res) => {
    res.send('render edit form');
};
// modificar las notas 
notesCtrl.upDateNote = (req, res) => {
    res.send('update notes');
};
// eliminar las notas
notesCtrl.deleteNotes = (req, res) => {
    res.send('deleting notes');
};

// exportamos el modelo de las notas 
module.exports = notesCtrl;