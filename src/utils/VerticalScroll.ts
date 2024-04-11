import { useRef, useEffect, useState } from "react";

export const useVerticalScroll = (verticalScroll: { state: boolean, location: number, direction: string }, setVerticalScroll: React.Dispatch<React.SetStateAction<{ state: boolean, location: number, direction: string }>>) => {
    const elRef = useRef<HTMLDivElement>(null);
    const beforeScrollY = useRef<number>(0);

    useEffect(() => {
        
        const el = elRef.current;

        if (el) {
            const onWheel = (e: WheelEvent) => {
                if (e.deltaY === 0) return;

                e.preventDefault();

                const currentScrollY = el.scrollTop + e.deltaY;

                if (currentScrollY > beforeScrollY.current) {
                    console.log("아래로 스크롤");
                    setVerticalScroll({ ...verticalScroll, direction: 'up' });
                } else if (currentScrollY < beforeScrollY.current) {
                    console.log("위로 스크롤");
                    setVerticalScroll({ ...verticalScroll, direction: 'down' });
                }

                el.scrollTo({
                    top: currentScrollY,
                    behavior: "smooth",
                });
                setVerticalScroll({ ...verticalScroll, location: currentScrollY });

                beforeScrollY.current = currentScrollY;
            };

            el.addEventListener("wheel", onWheel);
            el.style.overflowX = "hidden"; // 숨김

            return () => el.removeEventListener("wheel", onWheel);
        }
    }, [verticalScroll]);

    return elRef;
}