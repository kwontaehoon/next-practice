import { useRef, useEffect, useState } from "react";

export const useHorizontalScroll = (horizonScroll: { state: boolean, location: number, direction: string }, setHorizonScroll: React.Dispatch<React.SetStateAction<{ state: boolean, location: number, direction: string }>>) => {
    const elRef = useRef<HTMLDivElement>(null);
    const beforeScrollX = useRef<number>(0);

    useEffect(() => {
        if (horizonScroll.state) {
            const el = elRef.current;
            let direction = '';

            if (el) {
                const onWheel = (e: WheelEvent) => {
                    if (e.deltaY === 0) return;

                    e.preventDefault();
                    
                    const currentScrollX = el.scrollLeft + e.deltaY;

                    if (currentScrollX > beforeScrollX.current) {
                        direction = 'up';
                    } else if (currentScrollX < beforeScrollX.current) {
                        direction = 'down';
                    }

                    el.scrollTo({
                        left: currentScrollX,
                        behavior: "smooth",
                    });
                    setHorizonScroll({...horizonScroll, location: currentScrollX, direction: direction});

                    beforeScrollX.current = currentScrollX;
                };

                el.addEventListener("wheel", onWheel);
                el.style.overflowX = "hidden"; // 숨김

                return () => el.removeEventListener("wheel", onWheel);
            }
        }
    }, [horizonScroll]);

    return elRef;
}
