import { useState } from "react";

export default function ChangeBackground(){
        const [bgColor, setbgColor] = useState("white")


        function changebg(){
             setbgColor(bgColor === "white" ? "gray" : "white")
        }
    return(
        <>
        <div style={{background: bgColor, padding: "20px"}}>
            <button onClick={changebg}>Change BackGround</button>
        </div>
        </>
    )
}