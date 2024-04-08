import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import tw from 'twin.macro'
import { MainTwo, MainTwoText } from './type'
import { mainTwoText } from '@/constants/text/main';

const Page: React.FC<MainTwo> = ({ allScroll, setAllScroll }) => {

  const [textState, setTextState] = useState<MainTwoText>(false);
  console.log('textState: ', textState);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const { ref: textRef, inView: textInView, entry: textEntry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    console.log('ww: ', window.innerHeight);
    if (textInView && allScroll.direction == 'down') {
      setTextState(true);
    }else setTextState(false);
  }, [allScroll]);

  return (
    <div ref={ref}
      css={[
        tw`w-screen bg-amber-200 h-screen`,
        { animationFillMode: 'forwards' }]}
    >
      <div css={[tw`flex justify-center items-center h-full`, { animationFillMode: 'forwards' }]}>
        <div css={[tw`text-5xl font-bold`, { lineHeight: '60px' }]}>
          {mainTwoText.map(x => {
            return (
              <div key={x.id} ref={x.id == 4 ? textRef : null} css={tw`relative`}>
                <div>{x.content}</div>
                <div css={[tw`bg-amber-200 w-full h-6 bottom-0 absolute`, textState ? tw`animate-heightOn` : tw`animate-heightOff`, { animationFillMode: 'forwards' }]}></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Page;
