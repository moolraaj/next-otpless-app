import mongoose from "mongoose";

const adminSchema=new mongoose.Schema({
    
    email:{
        type:String,
        required:[true,'email is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    role:{
        type:String,
        default:'admin'
    }
    
})

const adminModel=mongoose.models.testadmins || mongoose.model('testadmins',adminSchema)
export default adminModel