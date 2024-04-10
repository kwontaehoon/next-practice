import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import tw from 'twin.macro'
import { MainTwo, MainTwoText } from './type'
import { mainTwoText } from '@/constants/text/main';
import { requestAnimationFrame } from '@/utils/RequestAnimationFrame';
import { scrollPrevent } from '@/utils/ScrollPrevent';
import { useHorizontalScroll } from '@/utils/HorizontalScroll';

const Page: React.FC<MainTwo> = ({ allScroll, setAllScroll }) => {

  const [textState, setTextState] = useState<MainTwoText>('none');
  console.log('textState: ', textState);

  const [horizonScroll, setHorizonScroll] = useState({
    state: false,
    location: 0
  });
  console.log("horizonScroll: ", horizonScroll);


  const { ref: topRef, inView: topInView, entry: topEntry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const { ref: textRef, inView: textInView, entry: textEntry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const { ref: bottomRef, inView: bottomInView, entry: bottomEntry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  console.log("bottomInView: ", bottomInView);

  // const aa = useRef(null);

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
    if (!bottomInView && topInView) {
      if (allScroll.direction == 'up') {
        if (!horizonScroll && textState == 'bottom') {
          setTextState('middle');
        } 
        if (textState == 'middle') {
          setTextState('none');
        }
      }
    }

    // twoPage 맨 밑에 닿았을 때
    if (!horizonScroll.state && bottomInView && textState == 'bottom') {
      scrollPrevent(true);
      requestAnimationFrame(window.innerHeight * 1, 500);
      setTextState('bottom');
      setHorizonScroll({...horizonScroll, state: true});
      setAllScroll({...allScroll, state: true});
    }
  }, [allScroll]);

  useEffect(()=>{
    if(allScroll.direction == 'up' && horizonScroll.state && horizonScroll.location <= 0){
      setTextState('middle');
      setHorizonScroll({...horizonScroll, state: false});
      setAllScroll({...allScroll, state: false});
    }
  }, [horizonScroll]);

  // ref를 사용하여 현재 스크롤 위치 알아내기
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (aa.current) {
  //       const { top, bottom } = aa.current.getBoundingClientRect();
  //       console.log('top: ', top, bottom);
  //       const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  //       if (top >= 0 && bottom <= windowHeight) {
  //         console.log('Element is visible on the screen!');
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div
      onWheel={() => allScroll.direction == 'up' ? scrollPrevent(false) : ''}
      css={[
        tw`w-screen bg-amber-200 relative h-screen flex flex-col justify-center items-center`
      ]}
    >
      <div ref={topRef} css={tw`border absolute top-0`}></div>

      <div ref={useHorizontalScroll(horizonScroll, setHorizonScroll)} css={tw`flex w-screen h-screen overflow-x-auto`}>
        <div css={tw`flex`}>
          <div css={[tw`text-5xl font-bold flex-1 flex items-center justify-center flex-col border-4 border-amber-600 w-screen h-screen`, { lineHeight: '60px' }]}>
            {mainTwoText.map(x => {
              return (
                <div key={x.id} ref={x.id == 4 ? textRef : null} css={tw`relative`}>
                  <div>{x.content}</div>
                  <div css={[tw`bg-amber-200 w-full h-32 bottom-0 absolute`,
                  allScroll.direction == 'down' ? textState == 'none' ? tw`h-32` : textState == 'middle' ? tw`animate-heightOn` : tw`animate-heightMiddleOn`
                    :
                    topInView ? textState == 'none' ? tw`animate-heightOff` : textState == 'middle' ? tw`animate-heightMiddleOff` : tw`h-0` : tw`h-0`,
                  { animationFillMode: 'forwards' }]}>
                  </div>
                </div>
              )
            })}
          </div>
          <div css={[tw`h-screen flex justify-center items-center border-4 border-blue-400`, { width: '1500px' }]}>123333333333333333333333</div>
        </div>
      </div>

      <div ref={bottomRef} css={tw`absolute bottom-0`}></div>
    </div>
  )
}

export default Page;
