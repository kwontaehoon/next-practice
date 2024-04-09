import React from "react";
import { useHorizontalScroll } from "@/utils/HorizontalScroll";
import tw from "twin.macro";

const HorizontalScrollableComponent = () => {
  const containerRef = useHorizontalScroll();

  return (
    <div ref={containerRef} css={[tw`flex w-screen overflow-scroll`, { height: '2000px' }]}>
      <div css={tw`flex`}>
        <div css={tw`w-40 bg-amber-100`}>123</div>
        <div css={[tw`bg-purple-500`, { width: '2500px' }]}>456</div>
      </div>
    </div>
  );
};

export default HorizontalScrollableComponent;
