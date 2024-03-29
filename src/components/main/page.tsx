import React, { useState, useEffect } from 'react'
import tw from 'twin.macro';
import { useInView } from 'react-intersection-observer';
import First from './first/page'
import Two from './two/page'
import Three from './three/page'
import Four from './four/page'

const page = () => {

  const [scroll, setScroll] = useState(0);
  // console.log("scroll: ", scroll, window.innerWidth);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  console.log("inView: ", inView);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.innerWidth < window.scrollY) {
      setScroll(window.innerWidth);
    } else setScroll(window.scrollY);
  };

  return (
    <div css={[tw`bg-white`, { width: '100px', height: '2000px' }]}>
      <First />
      <Two />
      <Three />
      <Four />
      {/* <div ref={ref} css={[tw`bg-amber-200`, { width: window.innerWidth < scroll ? '100%' : scroll , height: '200px'}]}>321</div> */}
    </div>
  )
}

export default page