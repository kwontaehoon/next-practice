import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import tw from 'twin.macro';
import First from './first/page'
import Two from './two/page'
import Three from './three/page'
import Four from './four/page'
import { debounce, throttle } from 'lodash';
import { MainScrollType } from './type'

const page = () => {

  const beforeScrollY = useRef<number>(0);

  const [allScroll, setAllScroll] = useState<MainScrollType>({
    page: 1,
    count: 0,
    direction: ''
  });
  console.log('allScroll: ', allScroll, window.scrollY);

  let timeoutId: NodeJS.Timeout | null = null;

  const handleScroll = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {

      const currentScrollY = window.scrollY;

      if (currentScrollY > beforeScrollY.current) {
        // console.log('ww 다운');
        setAllScroll({...allScroll, count: allScroll.count+1, direction: 'down'});
      } else if (currentScrollY < beforeScrollY.current) {
        // console.log('ww 업');
        if(allScroll.count == 0){
          return;
        }else setAllScroll({...allScroll, count: allScroll.count-1, direction: 'up'});
      }

      beforeScrollY.current = currentScrollY;
    }, 20);
  }, [allScroll]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleScroll, timeoutId]);

  return (
    <div css={[tw`bg-white`, { width: '100px' }]} >
      <First allScroll={allScroll} setAllScroll={setAllScroll} />
      <Two allScroll={allScroll} setAllScroll={setAllScroll} />
      <Three allScroll={allScroll} setAllScroll={setAllScroll} />
      <Four />
      {/* <div ref={ref} css={[tw`bg-amber-200`, { width: window.innerWidth < scroll ? '100%' : scroll , height: '200px'}]}>321</div> */}
    </div>
  )
}


export default page