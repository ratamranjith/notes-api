const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();
const dataFile = path.join(__dirname, '../data/notes.json');

// Helper to read notes
const readNotes = () => {
    const data = fs.readFileSync(dataFile, 'utf-8');
    return JSON.parse(data);
};

// Helper Class to Write Notes
const writeNotes = (notes) => {
    fs.writeFileSync(dataFile, JSON.stringify(notes, null, 2));
}

// ✅ GET all notes
router.get('/', (req, res) => {
    const notes = readNotes();
    res.json(notes);
});

// ✅ GET note by ID
router.get('/:id', (req, res) => {
    const notes = readNotes();
    const note = notes.find(n => n.id === req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json(note);
});

// ✅ POST create new note
router.post('/', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ error: 'Title and content required' });

    const newNote = { id: uuidv4(), title, content };
    const notes = readNotes();
    notes.push(newNote);
    writeNotes(notes);
    res.status(201).json(newNote);
});

// ✅ PUT update a note
router.put('/:id', (req, res) => {
    const { title, content } = req.body;
    const notes = readNotes();
    const index = notes.findIndex(n => n.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Note not found' });

    notes[index] = { ...notes[index], title, content };
    writeNotes(notes);
    res.json(notes[index]);
});

// ✅ DELETE a note
router.delete('/:id', (req, res) => {
    const notes = readNotes();
    const filteredNotes = notes.filter(n => n.id !== req.params.id);
    if (notes.length === filteredNotes.length)
        return res.status(404).json({ error: 'Note not found' });

    writeNotes(filteredNotes);
    res.json({ message: 'Note deleted successfully' });
});

module.exports = router;