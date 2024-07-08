import { ComponentProps, ForwardedRef, forwardRef } from "react"

import "./index.css"

type Props = ComponentProps<"button">

const Button = forwardRef((props: Props, ref: ForwardedRef<HTMLButtonElement> ) => {
    const {className, ...rest} = props
    return <button className={`LuterJs-Button ${className ?? ""}`} {...rest} ref={ref}/>
})

export default Button