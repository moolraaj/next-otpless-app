// import { DbConnect } from "@/database/databse"
import subjectModel from "@/model/subjectModel"
import { NextResponse } from "next/server"
// DbConnect()
export async function POST(req){
    let payload=await req.json()
    let {title,description,slug}=payload
    let result=new subjectModel({
        title,description,slug
    })
    await result.save()
    return NextResponse.json({result:result})
}