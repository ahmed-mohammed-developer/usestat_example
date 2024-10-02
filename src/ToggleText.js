import { useState } from "react";

export default function ToggleText(){
        const [text, setText] = useState("Hello")

        const toggle = () => {
            setText(text === "Hello" ? "Goodbye" : "Hello")
        }
    return(
        <>
        <p>{text}</p>
        <button onClick={toggle}>Toggle Text</button>
        </>
    )
}