import React, { Suspense } from 'react'
import Login from './component/loginPage'

function page() {
  return (
    <div>
      <Suspense fallback={<div>loading....</div>}>
      <Login/>
      </Suspense>
    </div>
  )
}

export default page
