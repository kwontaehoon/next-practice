import { getStaticProps } from '@/service/fetching/StaticProps';
import React, { useEffect } from 'react'

const StaticProps = () => {

  useEffect(()=>{
    const ssrFunc = async() => {
        const ssr = await getStaticProps();
        console.log("ssg: ", ssr);
    }
    ssrFunc();
}, []);

  return (
    <div>StaticProps</div>
  )
}

export default StaticProps