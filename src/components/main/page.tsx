import React, { useState, useEffect, useMemo, useRef } from 'react'
import tw from 'twin.macro';
import First from './first/page'
import Two from './two/page'
import Three from './three/page'
import Four from './four/page'
import { throttle } from 'lodash';

const page = () => {

  const [mainScroll, setMainScroll] = useState(window.scrollY);

  const [mainScrollCount, setMainScrollCount] = useState(0);

  const beforeScrollY = useRef(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    }
  }, []);

  const scrollEvent = useMemo(
    () =>
      throttle(() => {
        const currentScrollY = window.scrollY;
        if (beforeScrollY.current < currentScrollY) {
          setMainScrollCount(mainScrollCount+1);
          console.log("aa down");
        } else {
          setMainScrollCount(mainScrollCount-1);
          console.log("aa up");
        }
        //이전 스크롤값 저장
        beforeScrollY.current = currentScrollY;
      }, 300),
    [beforeScrollY]
  )

  return (
    <div css={[tw`bg-white`, { width: '100px', height: '2000px' }]}>
      <First />
      <Two mainScroll={mainScroll} mainScrollCount={mainScrollCount} />
      <Three />
      <Four />
      {/* <div ref={ref} css={[tw`bg-amber-200`, { width: window.innerWidth < scroll ? '100%' : scroll , height: '200px'}]}>321</div> */}
    </div>
  )
}

export default page