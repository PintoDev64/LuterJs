import { ReactNode } from "react"
import TableHead from "./components/TableHead"
import { checkDataParameter } from "./utils"
import NoData from "./components/nodata"
import TableBody from "./components/TableBody"

type Props = {
  className: string | undefined
  caption?: string | undefined
  children?: ReactNode,
  data?: {}[] | undefined,
  native?: boolean
}

import "./index.css"
import TableCaption from "./components/Caption"

/**
 * Returns a table using the standard HTML "table" tag or div elements
 * @see doc here https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
 */
export default function Table({ native = false, className = "LuterJs-Table", caption, children, data = [] }: Props) {

  if (checkDataParameter(data)) {
    return <NoData />
  }

  const TitlesArray: string[] = Object.keys(data![0])

  if (!native) {
    return (
      <>
        <div className={className ?? "LuterJs-Table"}>
          <TableHead className={className ?? "LuterJs-Table"} titles={TitlesArray} native={native} />
          <TableBody className={className ?? "LuterJs-Table"} dataArray={data} native={native} />
          {children}
        </div>
        <TableCaption className={className ?? "LuterJs-Table"} captionText={caption} native={native} />
      </>
    )
  }

  return (
    <table className={className ?? "LuterJs-Table"}>
      <TableCaption className={className ?? "LuterJs-Table"} captionText={caption} native={native} />
      <TableHead className={className ?? "LuterJs-Table"} titles={TitlesArray} native={native} />
      <TableBody className={className ?? "LuterJs-Table"} dataArray={data} native={native} />
      {children}
    </table>
  )
}
