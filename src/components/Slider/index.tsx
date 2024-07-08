import { MouseEvent, useEffect, useRef, useState } from "react"

import "./index.css"

type Props = {
    className: string | undefined,
    defaultValue: number | undefined,
    onChange: (value: number) => void
}

/**
 * Slider component or range element that returns the value (0/100) of the range
 * @event onChange - value: number
 * @returns JSX.Element
 */
export default function Slider({ className, defaultValue, onChange }: Props) {
    const [sliderValue, setSliderValue] = useState(defaultValue ?? 0);

    const conteiner = useRef<HTMLDivElement>(null!);

    const handleMouseMove = (e: any) => {
        const containerRect = conteiner.current.clientWidth;
        const containerBoundingRect = conteiner.current.getBoundingClientRect().left;
        const mouseX = e.clientX - containerBoundingRect
        const newValue = Math.trunc((mouseX / containerRect) * 100)
        if (newValue <= 0) setSliderValue(0)
        else if (newValue >= 100) setSliderValue(100)
        else setSliderValue(newValue)
    };

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    useEffect(() => {
        typeof onChange === "function" && onChange(sliderValue)
    }, [sliderValue])


    return (
        <div
            className={`LuterJs-Range ${className}`}
            ref={conteiner}
            onMouseDown={handleMouseDown}
            onClick={handleMouseMove}
            style={{
                background: `linear-gradient(90deg, var(--Range-Color) ${sliderValue}%, transparent ${sliderValue}% 100%)`
            }} />
    );
};