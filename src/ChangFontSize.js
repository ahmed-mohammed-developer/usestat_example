import { useState } from "react";

export default function ChangFontSize(){
    const [fontSize, setfontSize] = useState(16)

    const increaseFontSize = () => {
        setfontSize(fontSize + 2)
    }

    return(
        <>
        <p style={{fontSize: `${fontSize}px`}}>This is a resizable text </p>
        <button onClick={increaseFontSize}>Increase Font Size</button>
        </>
    )
}