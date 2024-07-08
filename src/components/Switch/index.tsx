import { ComponentProps, ForwardedRef, forwardRef, useRef, useState } from "react"

import "./index.css"
import { CheckIcon, XIcon } from "./components/icons"

type Props = ComponentProps<"input">

const DEFAULT_VALUES = {
    Checked: false
}

/**
 * Visually check whether an option is active or not
 * @event onChange -> Devuelve el estado del input (true/false)
 * @returns JSX.Element
 */
const Switch = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {

    const { className, ...rest } = props

    const SwitchRef = useRef<HTMLInputElement | null>(null)
    const [State, setState] = useState(DEFAULT_VALUES.Checked)

    const Execute = () => {
        SwitchRef.current?.click()
        setState(SwitchRef.current?.checked!)
    }

    return (
        <div className={`LuterJs-Switch ${className ?? ""}`}>
            <input className={`LuterJs-Switch-Input`} ref={SwitchRef} type="checkbox" defaultChecked={DEFAULT_VALUES.Checked} hidden aria-hidden {...rest} />
            <div
                onClick={Execute}
                className="LuterJs-Switch-Elementor"
                ref={ref}>
                <div
                    className={`LuterJs-Switch-Elementor-Circle ${State ? "LuterJs-Switch-Elementor-Circle-True" : "LuterJs-Switch-Elementor-Circle-False"}`}
                >
                    {State ? <XIcon /> : <CheckIcon />}
                </div>
            </div>
        </div>
    )
})

export default Switch