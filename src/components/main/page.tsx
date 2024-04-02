import React, { useState, useEffect, useMemo, useRef } from 'react'
import tw from 'twin.macro';
import First from './first/page'
import Two from './two/page'
import Three from './three/page'
import Four from './four/page'
import { throttle } from 'lodash';
import { useInView } from 'react-intersection-observer';

const page = () => {

  const [allScroll, setAllScroll] = useState(window.scrollY);

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

  return (
    <div ref={ref} css={[tw`bg-white`, { width: '100px', height: '2000px' }]} >
      <First />
      < Two allScroll={allScroll} setAllScroll={setAllScroll} />
      <Three />
      < Four />
      {/* <div ref={ref} css={[tw`bg-amber-200`, { width: window.innerWidth < scroll ? '100%' : scroll , height: '200px'}]}>321</div> */}
    </div>
  )
}


export default page