import { useState } from "react";

export default function ChangeText(){
        const [text, setText] = useState("Initial Text")

        function handelChangText() {
            if( text === "Initial Text") {
                setText("تم تغير النص")
            } else {
                setText("Initial Text")
            }
        }
    return(
        <>
        <p>{text}</p>
        <button onClick={handelChangText}>Change Text</button>
        </>
    )
}