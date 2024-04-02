import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import tw from 'twin.macro'
import { MainTwoType } from './type'

const page: React.FC<MainTwoType> = ({ allScroll, setAllScroll }) => {

  const beforeScrollY = useRef(0);

  const [scroll, setScroll] = useState(window.scrollY);
  const [scrollCount, setScrollCount] = useState(0);
  console.log('scrollCount: ', scrollCount);
  const [scrollState, setScrollState] = useState('');


  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const { ref: textRef, inView: textInView, entry: textEntry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  console.log('bb textInView: ', textInView);

  const scrollEvent = () => {
    const currentScrollY = window.scrollY;
    if (beforeScrollY.current < currentScrollY) {
      setScrollCount(prevCount => prevCount + 1);
      setScrollState('down');
      console.log("bb down");
    } else if (beforeScrollY.current > currentScrollY) {
      setScrollState('up');
      console.log("bb up");
      setScrollCount(prevCount => prevCount - 1);
    }
    beforeScrollY.current = currentScrollY;
    setScroll(currentScrollY);
    window.removeEventListener('scroll', scrollEvent);
  }

  useEffect(() => {
    if(inView){
      const timer = setInterval(() => {
        window.addEventListener("scroll", scrollEvent);
      }, 500);
      return () => {
        clearInterval(timer);
        window.removeEventListener("scroll", scrollEvent);
      };
    }
    
  }, [inView]);


  return (
    <div ref={ref}
      css={[
        tw`w-screen bg-amber-200`,
        { height: '500px', animationFillMode: 'forwards' }]}
    >
      <div css={[tw`flex justify-center items-center h-full`, textInView ? tw`animate-opacityOn` : tw`animate-opacityOff`, { animationFillMode: 'forwards' }]}>
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