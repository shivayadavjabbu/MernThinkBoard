import express from 'express'
import notesRoutes from './routes/notesRoutes.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
app.use(express.json());

const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

app.use("/api/notes", notesRoutes);
 
app.listen(PORT, () => {
    console.log('Server is running on port :' + PORT);
}); 

