type Props = {
    className?: string | undefined
    dataArray: {}[] | undefined
    native?: boolean
}

export default function TableBody({ className, dataArray, native }: Props) {
    if (!native) {
        return (
            <div className={`${className}-Body`}>
                {(dataArray && dataArray.length !== 0) && dataArray.map((object, index) =>
                    <div key={`${className}-Body-Row-${index}`} className={`${className}-Body-Row`}>
                        {Object.values<string[]>(object).map((detail) =>
                            <div key={`${className}-Body-Row-${index}-${detail}`}>{detail}</div>
                        )}
                    </div>
                )}
            </div>
        )
    }
    return (
        <tbody className={`${className}-Body`}>
            {(dataArray && dataArray.length !== 0) && dataArray.map((object, index) =>
                <tr key={`${className}-Body-Row-${index}`} className={`${className}-Body-Row`}>
                    {Object.values<string[]>(object).map((detail) =>
                        <td key={`${className}-Body-Row-${index}-${detail}`} scope="row">{detail}</td>
                    )}
                </tr>
            )}
        </tbody>
    )
}