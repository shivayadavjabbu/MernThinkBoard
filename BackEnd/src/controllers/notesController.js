import Note from '../models/Note.js'

export async function getNotes(req, res) {
    try{
        const notes = await Note.find();
        res.status(200).json(notes); 
    }catch(error){
        console.error("Error fetching get all notes:", error.message);
        res.status(500).json({ meassage: "Server Error" });
    }
}

export async function createNote(req, res) {
    try {
        const { title, content } = req.body; 
        const newNote = new Note({ title, content }); 
        const savedNote = await newNote.save(); 
        res.status(201).json(savedNote); 
    } catch (error) {
        console.error('Error creating note:', error.message); 
        res.status(500).json({ message: 'Server Error' });
    }
}   

export function updateNote(req, res) {
    try {
        if (!req.params.id) 
            throw new Error('Note ID is required');
        res.status(200).send(`Note with id ${req.params.id} updated successfully!`);    
    }catch (error) {
        console.error('Error updating note:', error.message); 
        res.status(500).json({ message: 'Server Error' });
    }
}   

export function deleteNote(req, res) {
    try {
        if (!req.params.id)
            throw new Error('Note ID is required');
        res.status(200).send(`Note with id ${req.params.id} deleted successfully!`);
    }catch (error) {
        console.error('Error deleting note:', error.message);
        res.status(500).json({ message: 'Server Error' });
    }
}