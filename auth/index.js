import express from 'express'
import mongoose from 'mongoose';
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
app.use(express.json());
// post user 
app.post('/api/user/registry',async(req,res)=>{

    const userDoc = await new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    res.send('registry');
})


app.listen(5000,()=>{
    console.log('this app is running in port 50000')
})