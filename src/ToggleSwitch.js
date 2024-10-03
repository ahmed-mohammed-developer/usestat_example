import { useState } from "react";

export default function ToggleSwitch() {

    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => {
        setIsOn(!isOn)
    };

    return(
        <>
        <p>{isOn ? "On" : "Off"}</p>
        <button onClick={toggleSwitch}>Toggle Switch</button>
        </>
    )
}