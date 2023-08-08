import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors'

import connectDB from './config/db.js';

// Routes
import userRoutes from './routes/userRoutes.js'
//Middlewares
import { notFound,errorHandler } from './middleware/errorMiddleware.js';


connectDB();
const app= express();
app.use(cors()); 
app.use(express.json());

app.use('/api/users', userRoutes);
app.get('/', (req,res)=>{ 
    res.send('server is ready')
});

app.use(notFound);
app.use(errorHandler);

const port = 4200;
app.listen(port, ()=>{
    console.log(`server running on port ${port}`); 
})
