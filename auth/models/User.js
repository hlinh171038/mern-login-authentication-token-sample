import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:6,
        max:225
    },
    email:{
        type:String,
        required:true,
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