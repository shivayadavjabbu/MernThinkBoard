// import express from 'express'

const express = require('express');
const app = express()

app.get('/api/notes', (req, res) => {
    //got the request and now sending responding message
    res.status(200).send('Hello from the backend!'); 
});

app.post('/api/notes', (req, res) => {
    //got the request and now sending responding message
    res.status(200).json({message: 'Post request received!'});
});

app.put('/api/notes/:id', (req, res) => {
    //got the request and now sending responding message
    const noteId = req.params.id;
    res.status(200).json({message: `Put request received for note with id: ${noteId}`});
});

app.delete('/api/notes/:id', (req, res) => {
    //got the request and now sending responding message
    const noteId = req.params.id;
    res.status(200).json({message: `Delete request received for note with id: ${noteId}`});
});  

app.listen(5001, () => {
    console.log('Server is running on port 5001')
}); 

