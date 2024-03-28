import { getStaticPaths } from '@/service/fetching/StaticPaths';
import React, { useEffect } from 'react'

const StaticPaths = () => {

  useEffect(()=>{
    const ssrFunc = async() => {
        const ssr = await getStaticPaths();
        console.log("ssg: ", ssr);
    }
    ssrFunc();
}, []);

  return (
    <div>StaticPaths</div>
  )
}

export default StaticPaths