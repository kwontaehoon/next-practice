'use client'
import { getStaticProps } from '@/getStaticProps'
import React, { useEffect } from 'react'

const page = () => {

    useEffect(() => {
        const ssgFunc = async() => {
            const ssg = await getStaticProps();
            console.log("ssg: ", ssg);
        }
        ssgFunc();
    }, []);

    return (
        <div>
            <div>getStaticProps</div>
        </div>
    )
}

export default page