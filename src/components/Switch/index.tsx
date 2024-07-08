import { ComponentProps, ForwardedRef, forwardRef, useRef, useState } from "react"

import "./index.css"
import { CheckIcon, XIcon } from "./components/icons"

type Props = ComponentProps<"input">

const DEFAULT_VALUES = {
    Checked: false
}

const Switch = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {

    const { className, ...rest } = props

    const SwitchRef = useRef<HTMLInputElement | null>(null)
    const [State, setState] = useState(DEFAULT_VALUES.Checked)

    const Execute = () => {
        SwitchRef.current?.click()
        setState(SwitchRef.current?.checked!)
    }

    return (
        <div>
            <input className={`LuterJs-Switch-Input ${className}`} ref={SwitchRef} type="checkbox" defaultChecked={DEFAULT_VALUES.Checked} hidden aria-hidden {...rest} />
            <div
                onClick={Execute}
                className={`LuterJs-Switch ${className ?? ""}`}
                ref={ref}>
                <div
                    className={`LuterJs-Switch-Circle ${State ? "LuterJs-Switch-Circle-True" : "LuterJs-Switch-Circle-False"}`}
                >
                    {State ? <XIcon /> : <CheckIcon />}
                </div>
            </div>
        </div>
    )
})

export default Switch