export const requestAnimationFrame = (targetY: number, duration: number) => {
    const startingY = window.scrollY;
    const diff = targetY - startingY;
    let start: number;

    const scrollStep = (timestamp: number) => {
        if (!start) start = timestamp;
        const time = timestamp - start;
        const percent = Math.min(time / duration, 1);
        window.scrollTo(0, startingY + diff * percent);
        if (time < duration) {
            window.requestAnimationFrame(scrollStep);
        }
    };

    window.requestAnimationFrame(scrollStep);
    setTimeout(() => {
        console.log(1234);
    }, 500);
}