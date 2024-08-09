import { getServerSession } from 'next-auth'
import { stringify } from 'postcss'
import React from 'react'
import { authOptions } from './api/(auth)/auth/[...nextauth]/options'

async function page() {
    let session=await getServerSession(authOptions)
  return (
    <div>
      <h1>{JSON.stringify(session)}</h1>
    </div>
  )
}

export default page
