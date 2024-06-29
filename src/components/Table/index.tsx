import { ReactNode } from "react"

type Props = {
  children?: ReactNode,
  structure?: {}
}

export default function Table({ children }: Props) {
  return (
    <>
      <div className="LuterJs-Table">
        <table>
          {children}
        </table>
      </div>
    </>
  )
}
