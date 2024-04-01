import React, { useState, useEffect, useMemo, useRef } from 'react'
import tw from 'twin.macro';
import First from './first/page'
import Two from './two/page'
import Three from './three/page'
import Four from './four/page'
import { throttle } from 'lodash';

const page = () => {

  const [scroll, setScroll] = useState(window.scrollY);

  const [scrollCount, setScrollCount] = useState(0);

  const [scrollState, setScrollState] = useState('');

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
          setScrollCount(prevCount => prevCount + 1);
          setScrollState('down');
          console.log("aa down");
        } else {
          setScrollCount(prevCount => prevCount - 1);
          setScrollState('up');
          console.log("aa up");
        }
        beforeScrollY.current = currentScrollY;
      }, 300),
    []
  )

  return (
    <div css={[tw`bg-white`, { width: '100px', height: '2000px' }]}>
      <First />
      <Two scroll={scroll} scrollCount={scrollCount} setScrollCount={setScrollCount} scrollState={scrollState} />
      <Three />
      <Four />
      {/* <div ref={ref} css={[tw`bg-amber-200`, { width: window.innerWidth < scroll ? '100%' : scroll , height: '200px'}]}>321</div> */}
    </div>
  )
}

export default page