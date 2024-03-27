'use client';
import { useTestQuery } from '@/hooks/queries/Test';
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {

    const id = useParams().id;

    const { data, isLoading } = useTestQuery({userId: 1});

  return (
    <div>{id}</div>
  )
}

export default page