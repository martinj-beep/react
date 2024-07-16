import { forwardRef } from "react"

const Input = forwardRef((props, ref) => {
    return <input ref={ref} type="text"/>
});

Input.displayName = "Input";

export default Input;