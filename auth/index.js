import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
//models
import User from './models/User.js';
const app = express() 
dotenv.config()
//connect to db
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true})
.then(()=>{
    console.log('connect to mongoose is success');
})
.catch(error=>{
    console.log(error.message)
})
// middleware
app.use(cors())
app.use(express.json());
// post user 
app.post('/api/user/registry',async(req,res)=>{
    const {email,password} = req.body;
    const userDoc = await User.create({email,password});
    res.json(userDoc)
})


app.listen(5000,()=>{
    console.log('this app is running in port 50000')
})