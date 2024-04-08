import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import tw from 'twin.macro'
import { MainTwo, MainTwoText } from './type'
import { mainTwoText } from '@/constants/text/main';

const Page: React.FC<MainTwo> = ({ allScroll, setAllScroll }) => {

  const [textState, setTextState] = useState<MainTwoText>('none');
  console.log('textState: ', textState);

  const { ref: topRef, inView: topInView, entry: topEntry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const { ref: textRef, inView: textInView, entry: textEntry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {

    // down
    if (textInView) {
      if (allScroll.direction == 'down') {
        if (textState == 'none') {
          setTextState('middle');
        } else if (textState == 'middle') {
          setTextState('bottom');
        }
      }
    }

    // up
    if (topInView) {
      if (allScroll.direction == 'up') {
        if (textState == 'bottom') {
          setTextState('middle');
        } else if (textState == 'middle') {
          setTextState('none');
        }
      }
    }
  }, [allScroll]);

  return (
    <div
      css={[ 
        tw`w-screen bg-amber-200 h-screen`,
      ]}
    >
      <div ref={topRef}></div>
      <div css={[tw`flex justify-center items-center h-full`, { animationFillMode: 'forwards' }]}>
        <div css={[tw`text-5xl font-bold`, { lineHeight: '60px' }]}>
          {mainTwoText.map(x => {
            return (
              <div key={x.id} ref={x.id == 4 ? textRef : null} css={tw`relative`}>
                <div>{x.content}</div>
                <div css={[tw`bg-amber-200 w-full h-32 bottom-0 absolute`,
                  allScroll.direction == 'down' ? textState == 'none' ? tw`h-32` : textState == 'middle' ? tw`animate-heightOn` : tw`animate-heightMiddleOn`
                  :
                  topInView ? textState == 'none' ? tw`animate-heightOff` : tw`animate-heightMiddleOff` : tw`h-0`,
                { animationFillMode: 'forwards' }]}>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Page;
