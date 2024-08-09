import React, { Suspense } from 'react'
import Verifyotp from './verify'

function page() {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
      <Verifyotp/>
      </Suspense>
    </div>
  )
}

export default page
