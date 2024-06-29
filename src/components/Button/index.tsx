import { ComponentProps } from "react"

import "./index.css"

type Props = ComponentProps<"button">

export default function Button(propeties: Props) {
    return <button className={propeties.className ?? "LuterJs-Button"} {...propeties}/>
}
