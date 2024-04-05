import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import tw from 'twin.macro'
import { MainFour } from './type'

const page: React.FC<MainFour> = ({ allScroll, setAllScroll}) => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div ref={ref} css={[tw`bg-amber-300 w-screen h-screen bg-amber-700`]}>
      
    </div>
  )
}

export default page