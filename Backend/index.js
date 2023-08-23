import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
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
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());

app.get('/', (req,res)=>{ 
    res.send('server is ready')
});

app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);



// if(process.env.NODE_ENV === 'production'){
//     const __dirname = path.resolve();
//     app.use(express.static(path.join(__dirname,'build')));

// }

const port = 4300;
app.listen(port, ()=>{
    console.log(`server running on port ${port}`); 
})
