import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import tw from 'twin.macro'
import { MainThree } from './type'

const page: React.FC<MainThree> = ({ allScroll, setAllScroll}) => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(()=>{
    if(inView){
      setAllScroll({...allScroll, page: 3});
    }else {
      if(allScroll.direction == 'up'){
        setAllScroll({...allScroll, page: 2});
      }else setAllScroll({...allScroll, page: 4});
    }
  }, [inView]);

  return (
    <div ref={ref} css={[tw`border bg-amber-300 w-screen h-screen`]}>
      <img src='/images/ball.jpg' css={tw`w-full h-full`} />
    </div>
  )
}

export default page