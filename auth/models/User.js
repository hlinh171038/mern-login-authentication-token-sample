import mongoose from 'mongoose'

const schema = new mongoose.Schema({
 
    email:{
        type:String,
        required:true,
        unique:true,
        max:255,
        min:6
    },
    password:{
        type:String,
        required:true,
        max:50,
        min:3
    },
    date:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
});

const User = mongoose.model('User', schema);

export default User;