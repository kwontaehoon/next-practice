import React, { useState, useEffect, useMemo, useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import tw from 'twin.macro'

const page = () => {

  const beforeScrollY = useRef(0);

  const [scroll, setScroll] = useState(window.scrollY);
  const [scrollCount, setScrollCount] = useState(0);
  const [scrollState, setScrollState] = useState('');

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div ref={ref} css={[tw`border bg-amber-300 w-screen`, { height: '1000px' }]}>
      <img src='/images/ball.jpg' css={tw`w-full h-full`} />
    </div>
  )
}

export default page