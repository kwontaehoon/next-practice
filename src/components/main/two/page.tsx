import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import tw from 'twin.macro'
import { MainTwoType } from './type'

const page: React.FC<MainTwoType> = ({ scroll, scrollCount, setScrollCount, scrollState }) => {

  console.log("mainScrollCount: ", scrollCount);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  console.log('main two inView: ', inView);

  const { ref: textRef, inView: textInView, entry: textEntry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  console.log('main two textInView: ', textInView);
 

  useEffect(() => {
    if(textInView){
      setScrollCount(0);
    }
    console.log(123);
  }, [scrollCount]);


  return (
    <div ref={ref}
      css={[
        tw`w-screen bg-amber-200`,
        { height: '1000px', animationFillMode: 'forwards'}]}
    >
      <div css={tw`flex justify-center items-center h-full`}>
        <div css={tw`border text-3xl font-bold`}>
          <div>끊임없는 도전과,</div>
          <div>스스로의 혁신으로,</div>
          <div>인류의더 풍요로운 미래를</div>
          <div ref={textRef}>태훈이 열어나갑니다.</div>
        </div>
      </div>
    </div>
  )
}

export default page