import { ChangeEvent, ComponentProps, useState } from "react"

import "./index.css"

type Props = {
    properties: ComponentProps<"input"> | null | undefined,
    color?: string | `#${number}` | `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})`
    value: string | number | null | undefined
    className: string
    onChange: (value: number) => any,
}

const DEFAULT_VALUES = {
    min: 0,
    max: 100,
    value: 0
}

export default function Slider({ color = "#000000", className = "LuterJs-Range", value = 0, properties, onChange }: Props) {

    const [RangeValue, setRangeValue] = useState<string | number>(value ?? DEFAULT_VALUES.value)
    const RangePercentage = (Number(RangeValue) / (Number(properties?.max ?? DEFAULT_VALUES.max))) * 100

    const Execute = (event: ChangeEvent<HTMLInputElement>) => {
        setRangeValue(event.target.value)
        onChange(parseInt(event.target.value))
    }

    return (
        <input
            onChange={Execute}
            value={RangeValue}
            className={className}
            type="range"
            min={properties?.min ?? DEFAULT_VALUES.min}
            max={properties?.max ?? DEFAULT_VALUES.max}
            {...properties}
            style={{
                background: `linear-gradient(90deg, ${color} ${RangePercentage}%, transparent ${RangePercentage}%)`
            }} />
    )
}
