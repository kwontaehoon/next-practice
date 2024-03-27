'use client'
import React from 'react'
import tw from 'twin.macro'

import Link from 'next/link'

const page = () => {
  return (
    <div>

      <div css={[
        tw`bg-black`,
        {
          width: '100px',
          height: '200px',
        },
      ]}>
        <div className='text-fuchsia-100'>test</div>
      </div>

      <div>/</div>
      <Link href="/list">List로 이동</Link>
      <br />
      <Link href={"/getServerSideProps"}>getServerSideProps 이동</Link>
      <br />
      <Link href={"/getStaticProps"}>getStaticProps 이동</Link>
      <br />
      <Link href={"/getStaticPaths"}>getStaticPaths 이동</Link>
    </div>
  )
}

export default page