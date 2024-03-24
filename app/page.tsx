import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
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