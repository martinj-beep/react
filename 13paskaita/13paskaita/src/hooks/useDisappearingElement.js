import { useRef } from "react"

export function useDisappearingElement() {
    const elementRef = useRef()

    function handleMouseOver(e) {
        e.target.style.opacity = 0;
    }

    function handleMouseLeave(e) {
        e.target.style.opacity = 1
    }
}