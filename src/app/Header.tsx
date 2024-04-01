import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'

const Header = () => {

  const [scroll, setScroll] = useState(window.scrollY);
 
  const [isScroll, setIsScroll] = useState(true); // 스크롤이 올라갈때 hidden으로 바뀌는 state


  const [scrollFlag, setScrollFlag] = useState('');
  // console.log("isScroll: ", isScroll, scrollFlag);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scroll) {
        setScrollFlag('on');
      } else {
        setScrollFlag('off');
        setIsScroll(true);
      }
      setScroll(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  return (
    <div css={[tw`border bg-white flex w-full h-16 items-center px-12 fixed`, scrollFlag == '' ? '' : scrollFlag == 'on' ? tw`animate-headerOn` : tw`animate-headerOff`, { animationFillMode: 'forwards' }]}>
      <div css={tw`flex-1`}>LOGO</div>
      <div css={tw`flex w-3/4 justify-around`}>
        <div>그룹소개</div>
        <div>사업분야</div>
        <div>뉴스룸</div>
        <div>지속가능경영</div>
        <div>인재채용</div>
      </div>
      <div css={tw`flex`}>
        <div>ㅎㅎ</div>
        <div css={tw`mx-4`}>ㅎㅎ</div>
        <div>ㅎㅎ</div>
      </div>
    </div>
  )
}

export default Header