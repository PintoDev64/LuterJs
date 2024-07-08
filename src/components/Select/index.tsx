import { ComponentProps, useEffect, useState } from "react"

type OptionProp = { id: string | number, value: string | number }[]
type Props = ComponentProps<"select"> & {
    native?: boolean
    data: string[] | number[] | OptionProp | undefined
    onChange<T>(value: T): void
}

import "./index.css"
import { evalClassName } from "./utils"

export default function Select(props: Props) {
    const { native = false, data, className, value, onChange, ...rest } = props;
    if (!data || data?.length === 0) return

    const [OpenSelect, setOpenSelect] = useState(false)
    const [OptionsValue, setOptionsValue] = useState(() => {
        if (value) return value
        else if (typeof data[0] === "object") return data[0].value
        else return data[0]
    })

    function setSelect() { setOpenSelect(!OpenSelect) }
    function SetValue(value: string | number) { setOptionsValue(value); setSelect() }

    useEffect(() => {
        typeof onChange === "function" && onChange(OptionsValue)
    }, [OptionsValue])

    if (!native) {
        return (
            <div className={`LuterJs-Select ${className ?? ""}`}>
                <div className={`LuterJs-Select-Value ${evalClassName(OpenSelect)}`} onClick={setSelect}><p>{OptionsValue}</p></div>
                <div className={`LuterJs-Select-List ${evalClassName(OpenSelect)}`}>
                    {
                        data.map(option => {
                            if (typeof option === "object") {
                                return <div key={option.id} onClick={() => SetValue(option.value)} className="LuterJs-Select-List-Option"><p>{option.value}</p></div>
                            }
                            return <div key={option} onClick={() => SetValue(option)} className="LuterJs-Select-List-Option"><p>{option}</p></div>
                        })
                    }
                </div>
            </div>
        )
    }

    return (
        <select value={OptionsValue} className={`LuterJs-Select ${className ?? ""}`} {...rest} onChange={event => SetValue(event.target.value)}>
            {
                data.map(option => {
                    if (typeof option === "object") {
                        return <option key={option.id} onClick={() => SetValue(option.value)} className="LuterJs-Select-List-Option">{option.value}</option>
                    }
                    return <option key={option} onClick={() => SetValue(option)} className="LuterJs-Select-List-Option">{option}</option>
                })
            }
        </select>
    )
}
