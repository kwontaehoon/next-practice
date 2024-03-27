import Page, { getServerSideProps } from '@/service/fetching/ServerSideProps'
import React, { useEffect } from 'react'

const page = () => {

  useEffect(()=>{
    const ssrFunc = async() => {
        const ssr = await getServerSideProps();
        console.log("ssr: ", ssr);
    }
    ssrFunc();
}, []);

    return (
        <div>
            <div>getServerSideProps</div>
            {/* <Page /> */}
        </div>
    )
}

export default page