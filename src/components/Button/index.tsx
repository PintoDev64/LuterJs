import { ComponentProps, ForwardedRef, forwardRef } from "react"

import "./index.css"

type Props = ComponentProps<"button">

/**
 * just one button add what you need
 * @returns JSX.Element
 */
const Button = forwardRef((props: Props, ref: ForwardedRef<HTMLButtonElement> ) => {
    const {className, ...rest} = props
    return <button className={`LuterJs-Button ${className ?? ""}`} {...rest} ref={ref}/>
})

export default Button