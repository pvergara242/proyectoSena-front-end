const { Router } = require('express');
const router = Router();
// crud 
const { renderNoteForm, createNewNote, renderNotes, renderEditForm, upDateNote, deleteNotes } = require('../controllers/notes.controler');

//new note
router.get('/notes/add', renderNoteForm);
router.post('/notes/new-note', createNewNote);

//get all note
router.get('/notes', renderNotes);


//editar notas
router.get('/notes/edit/:id', renderEditForm);
router.put('/notes/edit/:id', upDateNote);

//delete notes 
router.delete('/notes/delete/:id', deleteNotes);


module.exports = router