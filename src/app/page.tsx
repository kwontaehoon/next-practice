'use client'

import React from 'react'
import tw from 'twin.macro'
import Main from '@/components/main/page'
import Link from 'next/link'

const page = () => {

  return (
    <div>
      <Main />
      {/* <div css={[
        tw`bg-black`,
        {
          width: '100px',
          height: '200px',
        },
      ]}>
        <div className='text-fuchsia-100'>test</div>
      </div> */}

      {/* <div>/</div>
      <Link href="/list">List로 이동</Link>
      <br />
      <Link href={"/fetching/clientSide"}>clientSide 이동</Link>
      <br />
      <Link href={"/fetching/serverSideProps"}>getServerSideProps 이동</Link>
      <br />
      <Link href={"/fetching/staticProps"}>getStaticProps 이동</Link>
      <br />
      <Link href={"/fetching/staticPaths"}>getStaticPaths 이동</Link>
      <br />
      <Link href={"/test"}>test 이동</Link> */}
    </div>
  )
}

export default page