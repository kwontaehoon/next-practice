import React, { useState, useEffect, useMemo, useRef } from 'react'
import tw from 'twin.macro';
import First from './first/page'
import Two from './two/page'
import Three from './three/page'
import Four from './four/page'

const page = () => {

  const prevScrollYRef = useRef(0);
  const isScrollStoppedRef = useRef(true);


  const [mainScroll, setMainScroll] = useState(window.scrollY);
  // console.log("scroll: ", mainScroll, window.innerWidth);

  const [mainScrollState, setMainScrollState] = useState('');
  console.log('mainScrollState: ', mainScrollState);

  const [mainScrollCount, setMainScrollCount] = useState(0);

  // const throttledScroll = useMemo(() =>
  //     throttle((scroll, count) => {
  //       console.log('스크롤 이벤트', count);
  //       const currentScrollY = window.scrollY;
  //       if (currentScrollY > scroll) {
  //         // console.log("bb down", scroll, '-' ,currentScrollY, '-', window.scrollY);
  //         setMainScrollState('down');
  //         console.log('test down: ', count);
  //         setMainScrollCount(count+1);
  //       } else {
  //         // console.log("bb up", aa, currentScrollY);
  //         setMainScrollState('up');
  //         console.log('test up: ', count);
  //         if(count < 0){
  //           setMainScrollCount(0);
  //         }else{
  //           setMainScrollCount(count-1);
  //         }
  //       }
  //       setMainScroll(currentScrollY);

  //       scrollTimeoutRef.current = setTimeout(() => {
  //         console.log('aaaaaaaaaa');
  //         scrollTimeoutRef.current = null; // 타이머 초기화
  //       }, 100);
        
  //     }, 100),
  //   []);

  useEffect(() => {

    const handleScroll = (event) => {
      if (!isScrollStoppedRef.current) {
        event.preventDefault();
        return;
      }

      const currentScrollY = window.scrollY;

      console.log('hh mainScrollCount: ', mainScrollCount);
      console.log('hhh currentScrollY: ', currentScrollY);

      if (currentScrollY > mainScroll) { // 스크롤이 아래로 이동했을 때만 실행

        isScrollStoppedRef.current = false; // 스크롤 중지 상태 해제

        setTimeout(() => {
          console.log("aa down");
          setMainScrollCount(mainScrollCount+1);
          isScrollStoppedRef.current = true; // 500ms 후에 스크롤 중지 상태로 설정
        }, 100);
      }else{

        isScrollStoppedRef.current = false; // 스크롤 중지 상태 해제

        setTimeout(() => {
          console.log("aa up");
          setMainScrollCount(mainScrollCount-1);
          isScrollStoppedRef.current = true; // 500ms 후에 스크롤 중지 상태로 설정
        }, 100);
      }

      setMainScroll(currentScrollY);
      prevScrollYRef.current = currentScrollY; // 현재 스크롤 위치 업데이트
    };

    window.addEventListener('scroll', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div css={[tw`bg-white`, { width: '100px', height: '2000px' }]}>
      <First />
      <Two mainScroll={mainScroll} mainScrollState={mainScrollState} mainScrollCount={mainScrollCount} />
      <Three />
      <Four />
      {/* <div ref={ref} css={[tw`bg-amber-200`, { width: window.innerWidth < scroll ? '100%' : scroll , height: '200px'}]}>321</div> */}
    </div>
  )
}

export default page