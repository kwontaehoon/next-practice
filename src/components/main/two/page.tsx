import React, { useEffect, useState, useRef, useMemo } from 'react'
import { useInView } from 'react-intersection-observer';
import tw from 'twin.macro'
import { throttle } from 'lodash';

const page = ({ mainScroll, mainScrollState, mainScrollCount }) => {

  console.log("mainScrollCount: ", mainScrollCount);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });


  return (
    <div ref={ref} css={[tw`w-screen bg-amber-200`, { height: '2000px' }]}></div>
  )
}

export default page