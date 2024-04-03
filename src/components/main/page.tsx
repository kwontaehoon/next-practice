import React, { useState, useEffect, useMemo, useRef } from 'react'
import tw from 'twin.macro';
import First from './first/page'
import Two from './two/page'
import Three from './three/page'
import Four from './four/page'
import { throttle } from 'lodash';
import { useInView } from 'react-intersection-observer';

const page = () => {

  const beforeScrollY = useRef(0);

  const [allScroll, setAllScroll] = useState(window.scrollY);
  console.log('allScroll: ', allScroll);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });


  // const scrollEvent = useMemo(
  //   () =>
  //     throttle(() => {
  //       const currentScrollY = window.scrollY;
  //       if (beforeScrollY.current < currentScrollY) {
  //         setScrollCount(prevCount => prevCount + 1);
  //         setScrollState('down');
  //         console.log("aa down");
  //       } else {
  //         setScrollCount(prevCount => prevCount - 1);
  //         setScrollState('up');
  //         console.log("aa up");
  //       }
  //       beforeScrollY.current = currentScrollY;
  //     }, 300),
  //   []
  // )

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId); // 이전 타임아웃 제거
      timeoutId = setTimeout(() => {
        console.log('스크롤 이벤트가 발생했습니다.', window.scrollY);
        const currentScrollY = window.scrollY;
        if (beforeScrollY.current < currentScrollY) {
          console.log('down');
        }else console.log('up');

        setAllScroll(window.scrollY);
        // 스크롤 이벤트가 발생할 때 실행할 코드를 여기에 작성합니다.
      }, 200); // 디바운스 시간: 300ms
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId); // 컴포넌트가 언마운트될 때 타임아웃 제거
    };
  }, []);

  return (
    <div ref={ref} css={[tw`bg-white`, { width: '100px', height: '5000px', }]} >
      <First />
      <Two allScroll={allScroll} setAllScroll={setAllScroll} />
      <Three />
      <Four />
      {/* <div ref={ref} css={[tw`bg-amber-200`, { width: window.innerWidth < scroll ? '100%' : scroll , height: '200px'}]}>321</div> */}
    </div>
  )
}


export default page