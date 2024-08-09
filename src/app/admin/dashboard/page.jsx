'use client'
import { authOptions } from '@/app/api/(auth)/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import { signOut } from 'next-auth/react'
import React from 'react'

async function page() {
    let logout=()=>{
        signOut({
            callbackUrl:'/login',
            redirect:true
        })
    }
    let session=await getServerSession(authOptions)
  return (
    <div>
        <h1>{JSON.stringify(session)}</h1>
      <h1>this is admin dashboard</h1>
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default page

