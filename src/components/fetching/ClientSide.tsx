import { useTestQuery } from '@/hooks/queries/Test';
import React, { useEffect } from 'react'

const ClientSide = () => {

    const { data, isSuccess } = useTestQuery({ userId: 1 });

    useEffect(()=>{
        const a = data;
        console.log("aa: ", a);
}, [data]);

    return isSuccess && (
        <div>{data.name}</div>
    )
}

export default ClientSide