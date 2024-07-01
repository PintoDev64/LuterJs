import { ChangeEvent, ComponentProps, useRef, useState } from "react"

import "./index.css"
import { CheckIcon, XIcon } from "./components/icons"

type Props = {
    properties?: ComponentProps<"input">
    className?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => any
}

const DEFAULT_VALUES = {
    Checked: false
}

export default function Switch({ properties, className = "LuterJs-Switch", onChange }: Props) {

    const SwitchRef = useRef<HTMLInputElement | null>(null)
    const [State, setState] = useState(DEFAULT_VALUES.Checked)

    const Execute = () => {
        SwitchRef.current?.click()
        setState(SwitchRef.current?.checked!)
    }

    return (
        <>
            <input className={`${className}-Input`} ref={SwitchRef} type="checkbox" onChange={onChange} defaultChecked={DEFAULT_VALUES.Checked} hidden aria-hidden {...properties} />
            <div
                onClick={Execute}
                className={className}>
                <div
                    className={`${className}-Circle ${State ? `${className}-Circle-True` : `${className}-Circle-False`}`}
                >
                    {State ? <XIcon /> : <CheckIcon />}
                </div>
            </div>
        </>
    )
}
