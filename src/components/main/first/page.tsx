import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import tw from 'twin.macro'
import { MainFirst } from './type'

const page: React.FC<MainFirst> = ({ allScroll, setAllScroll}) => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div ref={ref} css={[tw`bg-amber-300 w-screen h-screen`]}>
      <img src='/images/ball.jpg' css={tw`w-full h-full`} />
    </div>
  )
}

export default page