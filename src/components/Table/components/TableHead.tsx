type Props = {
    className?: string | undefined
    titles: string[]
    native?: boolean
}

export default function TableHead({ className, titles, native }: Props) {

    if (!native) {
        return (
            <div className={`LuterJs-Table-Head ${className ?? ""}`}>
                <div className={`LuterJs-Table-Head-Row ${className ?? ""}`}>
                    {
                        (titles && titles.length !== 0) && titles.map(Title => <div key={`${className}-Head-Row-${Title}`}>{Title}</div>)
                    }
                </div>
            </div>
        )
    }

    return (
        <thead className={`LuterJs-Table-Head ${className ?? ""}`}>
            <tr className={`LuterJs-Table-Head-Row ${className ?? ""}`}>
                {
                    (titles && titles.length !== 0) && titles.map(Title => <th key={`${className}-Head-Row-${Title}`} scope="col">{Title}</th>)
                }
            </tr>
        </thead>
    )
}