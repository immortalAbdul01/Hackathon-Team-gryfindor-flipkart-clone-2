import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'

function success() {
    const {data:session}=useSession()
  return (
    <div>
      <h1>Sucess bro</h1>
      <h1>Done </h1>
      {/* <Image src={session.user.image}  width={200} height={100}/> */}
    </div>
  )
}

export default success
