import React from 'react'
import { useInView } from 'react-intersection-observer';
import tw from 'twin.macro'

const page = () => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div ref={ref} css={tw`border bg-amber-300 h-screen w-screen`}>
      <img src='/images/ball.jpg' css={tw`w-full h-full`} />
    </div>
  )
}

export default page