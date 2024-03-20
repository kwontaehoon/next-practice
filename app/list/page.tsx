import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='border'>123</div>
      <Link href="/abc">list</Link>
    </div>
  )
}

export default page