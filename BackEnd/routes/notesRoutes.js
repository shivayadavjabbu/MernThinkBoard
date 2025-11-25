import express from "express"

const router = express.Router();

router.get('/', (req, res) => {
    //got the request and now sending responding message
    res.status(200).send('Hello from the backend!'); 
});

router.post('/', (req, res) => {
    res.status(201).send('Note created successfully!');
});

router.put('/:id', (req, res) => {
    res.status(200).send(`Note with id ${req.params.id} updated successfully!`);
});

router.delete('/:id', (req, res) => {
    res.status(200).send(`Note with id ${req.params.id} deleted successfully!`);
}); 


export default router;

