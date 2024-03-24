'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'

const page = () => {

  const useUser = () => ({ user: null, loading: false })
  return (
    <div>
      <div className='border'>/list</div>
      <Link href="/abc">abc로 이동</Link>
    </div>
  )
}

export default page