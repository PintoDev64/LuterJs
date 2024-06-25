import { ChangeEvent, ComponentProps, useRef, useState } from "react"

import "./index.css"

type Props = {
    inputProps: ComponentProps<"input">
    compProps: ComponentProps<"div">
    onClick: (value: boolean) => void
}

const VIWEWBOX = {
    False: "0 0 460.775 460.775",
    True: "0 0 17.837 17.837"
}

const D = {
    False: "M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z",
    True: "M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27   c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0   L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"
}

export default function Switch({ inputProps, compProps, onClick }: Props) {

    const SwitchRef = useRef<HTMLInputElement | null>(null)
    const [State, setState] = useState(false)

    const Execute = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked);
        setState(event.target.checked)
        onClick(event.target.checked)
    }

    return (
        <>
            <input className="LuterJs-Switch-Input" ref={SwitchRef} onChange={Execute} type="checkbox" checked={State} hidden aria-hidden {...inputProps} />
            <div
                onClick={() => SwitchRef.current?.click()}
                className="LuterJs-Switch">
                <div
                    className={`LuterJs-Switch-Circle ${State ? "LuterJs-Switch-Circle-True" : "LuterJs-Switch-Circle-False"}`}
                    {...compProps}
                >
                    {
                        State
                            ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="25px"
                                    width="25px"
                                    version="1.1"
                                    viewBox={VIWEWBOX.True} >
                                    <g>
                                        <path d={D.True} />
                                    </g>
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="25px"
                                    width="25px"
                                    version="1.1"
                                    viewBox={VIWEWBOX.False}>
                                    <path d={D.False} />
                                </svg>
                            )
                    }
                </div>
            </div>
        </>
    )
}
