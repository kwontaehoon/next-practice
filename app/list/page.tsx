'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'

const page = () => {

  const useUser = () => ({ user: null, loading: false })
  return (
    <div>
      <div className='border'>123</div>
      <Link href="/abc">list</Link>
      <div>클릭</div>
    </div>
  )
}

export default page