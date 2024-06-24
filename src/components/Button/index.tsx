interface Props {
    children: string
}

export default function Button({ children }: Props) {
  return <button className="LuterJs-Button">{ children }</button>
}
