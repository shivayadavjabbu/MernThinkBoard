// import express from 'express'

const express = require('express');
const app = express()

app.get('/api/notes', (req, res) => {
    //got the request and now sending responding message
    res.status(200).send('Hello from the backend!'); 
});

app.listen(5001, () => {
    console.log('Server is running on port 5001')
}); 

