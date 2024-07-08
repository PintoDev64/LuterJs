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
 * @returns JSX.Element
 * @see doc here https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
 */
export default function Table({ native = false, className, caption, children, data = [] }: Props) {

  if (checkDataParameter(data)) {
    return <NoData />
  }

  const TitlesArray: string[] = Object.keys(data![0])

  if (!native) {
    return (
      <>
        <div className={`LuterJs-Table ${className ?? ""}`}>
          <TableHead titles={TitlesArray} native={native} />
          <TableBody dataArray={data} native={native} />
          {children}
        </div>
        <TableCaption captionText={caption} native={native} />
      </>
    )
  }

  return (
    <table className={`LuterJs-Table ${className ?? ""}`}>
      <TableCaption captionText={caption} native={native} />
      <TableHead titles={TitlesArray} native={native} />
      <TableBody dataArray={data} native={native} />
      {children}
    </table>
  )
}
