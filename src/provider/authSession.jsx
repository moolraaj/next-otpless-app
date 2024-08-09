
'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'

function AuthSession({children}) {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthSession
