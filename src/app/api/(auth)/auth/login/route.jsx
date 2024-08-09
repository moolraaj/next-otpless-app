 
import { NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import adminModel from '@/model/usermodel'
import { DbConnect } from '@/database/databse'

DbConnect()
export async function POST(req) {
  let payload = await req.json()
  let { email, password } = payload

  let isEmail = await adminModel.findOne({ email })
  if (isEmail) {
    return NextResponse.json({
      status: 200,
      message: 'admin logged in successfully',
      isEmail,
    })
  }

  let salt = await bcryptjs.genSalt(10)
  let hashPassword = await bcryptjs.hash(password, salt)

  let result = new adminModel({
    email: 'admin@gmail.com',
    password: hashPassword,
  })

  await result.save()
  return NextResponse.json({ result })
}
