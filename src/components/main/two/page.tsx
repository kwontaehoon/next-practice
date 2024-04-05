import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import tw from 'twin.macro'
import { MainTwo } from './type'

const Page: React.FC<MainTwo> = ({ allScroll, setAllScroll }) => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const { ref: textRef, inView: textInView, entry: textEntry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div ref={ref}
      css={[
        tw`w-screen bg-amber-200 h-screen`,
        { animationFillMode: 'forwards' }]}
    >
      <div css={[tw`flex justify-center items-center h-full`, textInView ? tw`animate-opacityOn` : tw`animate-opacityOff`, { animationFillMode: 'forwards' }]}>
        <div css={tw`text-4xl font-bold leading-10`}>
          <div css={tw`relative`}>
            <div>끊임없는 도전과,</div>
            <div css={tw`border absolute bg-amber-200 w-full h-5 bottom-0`}></div>
          </div>
          <div css={tw`relative`}>
            <div>스스로의 혁신으로,</div>
            <div css={tw`border absolute bg-amber-200 w-full h-5 bottom-0`}></div>
          </div>
          <div css={tw`relative`}>
            <div>인류의 더 풍요로운 미래를,</div>
            <div css={tw`border absolute bg-amber-200 w-full h-5 bottom-0`}></div>
          </div>
          <div ref={textRef} css={tw`relative`}>
            <div>태훈이가 열어갑니다.</div>
            <div css={tw`border absolute bg-amber-200 w-full h-5 bottom-0`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;
