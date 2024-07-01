type Props = {
    className?: string | undefined
    captionText?: string | undefined
    native?: boolean
}

export default function TableCaption({ className, captionText, native }: Props) {
    console.log(captionText);
    if (!captionText || captionText.length === 0) return
    if (!native) {
        <div className={`${className}-Caption`}>
            {captionText}
        </div>
    }
    return (
        <caption className={`${className}-Caption`}>
            {captionText}
        </caption>
    )
}