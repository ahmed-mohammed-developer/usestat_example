import { useState } from "react";

export default function ChangeColor() {
    const [color, SetColor] = useState('red')

    const changeColor = () => {
        SetColor(color === "red" ? "blue" : "red")
    }
    return(
        <>
        <p style={{ color}}>This is colored text</p>
        <button onClick={changeColor}>Change Color</button>
        </>
    )
}