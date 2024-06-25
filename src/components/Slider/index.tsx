import { ChangeEvent, ComponentProps } from "react"

import "./index.css"

type Props = {
    props: ComponentProps<"input">,
    onChange: (value: number) => any
}

export default function Slider({ props, onChange }: Props) {

    const Execute = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        onChange(parseInt(event.target.value))
    }

    return (
        <>
            <input onChange={Execute} className="LuterJs-Range" type="range" {...props} />
        </>
    )
}
