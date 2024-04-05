import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import tw from 'twin.macro'
import { MainThree } from './type'

const page: React.FC<MainThree> = ({ allScroll, setAllScroll}) => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div ref={ref} css={[tw`bg-amber-900 w-screen h-screen`]}>

    </div>
  )
}

export default page