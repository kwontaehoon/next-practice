'use client'
import tw from 'twin.macro'
import { getServerSideProps } from '@/getServerSideProps'
import React, { useEffect } from 'react'
import { css } from '@emotion/react'


const page = () => {

    console.log("repo: ", getServerSideProps());

    useEffect(()=>{
        const ssrFunc = async() => {
            const ssr = await getServerSideProps();
            console.log("ssr: ", ssr);
        }
        ssrFunc();
    }, []);

    return (
        <div>
            <div className='text-gray-600'>getServerSideProps</div>
            <div className={css`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `}>
    <div tw="w-1/2" />
    <div tw="w-1/2" />
  </div>
            {/* <Page /> */}
        </div>
    )
}

export default page