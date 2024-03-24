import Page, { getServerSideProps } from '@/getServerSideProps'
import React from 'react'

const page = () => {

    const a = getServerSideProps();
    console.log("a: ", a);

    return (
        <div>
            <div>getServerSideProps</div>
            {/* <Page /> */}
        </div>
    )
}

export default page