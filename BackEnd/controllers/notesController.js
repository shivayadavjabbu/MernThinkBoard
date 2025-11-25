export function getNotes(req, res) {
    res.status(200).send('Hello from the backend!'); 
}

export function createNote(req, res) {
    res.status(201).send('Note created successfully!');
}   

export function updateNote(req, res) {
    res.status(200).send(`Note with id ${req.params.id} updated successfully!`);
}   

export function deleteNote(req, res) {
    res.status(200).send(`Note with id ${req.params.id} deleted successfully!`);
}