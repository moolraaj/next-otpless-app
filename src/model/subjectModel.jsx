import mongoose from 'mongoose'

let subjectSchema=new mongoose.Schema({
    title:String,
    description:String,
    slug:String,
})

let subjectModel=mongoose.models.subjects||mongoose.model('subjects',subjectSchema)

export default subjectModel