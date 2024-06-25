import { ComponentProps } from "react"

import "./index.css"

type Props = {
    props: ComponentProps<"button">,
    style: "small" | "large"
}

export default function Button({ props, style = "small" }: Props) {
    if (style === "small") {
        return <button className="LuterJs-Button-Small" {...props} />
    } else if (style === "large") {
        return <button className="LuterJs-Button-Large" {...props} />
    }
}
