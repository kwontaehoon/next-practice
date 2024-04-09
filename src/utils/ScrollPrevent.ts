export const scrollPrevent = (state: boolean) => {
    return state ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
}