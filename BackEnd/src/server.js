import express from 'express'
import notesRoutes from './routes/notesRoutes.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import ratelimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express()

const PORT = process.env.PORT || 5001;

// Connect to MongoDB


app.use(express.json()); // this is a middle ware that gives access to the body

app.use(ratelimiter); 

//our simple custom middle ware 
app.use((req, res, next) => {
    console.log(`Req method is ${req.method} and url is ${req.url}`); 
    next(); 
}); 

app.use("/api/notes", notesRoutes);

//CONNECT THE DATABASE THEN RUN THE SERVER
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on port :' + PORT);
    }); 
}); 



