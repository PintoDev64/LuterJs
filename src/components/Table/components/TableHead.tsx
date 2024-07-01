type Props = {
    className?: string | undefined
    titles: string[]
    native?: boolean
}

export default function TableHead({ className, titles, native }: Props) {

    if (!native) {
        return (
            <div className={`${className}-Head`}>
                <div className={`${className}-Head-Row`}>
                    {
                        (titles && titles.length !== 0) && titles.map(Title => <div key={`${className}-Head-Row-${Title}`}>{Title}</div>)
                    }
                </div>
            </div>
        )
    }

    return (
        <thead className={`${className}-Head`}>
            <tr className={`${className}-Head-Row`}>
                {
                    (titles && titles.length !== 0) && titles.map(Title => <th key={`${className}-Head-Row-${Title}`} scope="col">{Title}</th>)
                }
            </tr>
        </thead>
    )
}