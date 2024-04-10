import { useRef, useEffect, useState } from "react";

export function useHorizontalScroll(horizonScroll: {state: boolean, location: number}, setHorizonScroll: React.Dispatch<React.SetStateAction<{state: boolean, location: number}>>) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (horizonScroll.state) {
      const el = elRef.current;
      if (el) {
        const onWheel = (e: WheelEvent) => {
          if (e.deltaY === 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth"
          });
          setHorizonScroll({...horizonScroll, location: el.scrollLeft + e.deltaY});
        };
        el.addEventListener("wheel", onWheel);
        el.style.overflowX = "hidden"; // 숨김
        return () => el.removeEventListener("wheel", onWheel);
      }
    }
  }, [horizonScroll]);

  return elRef;
}
