import { useState } from "react";




export default function MyButton(){

    const [value, setValue] = useState("Moh")

    function buttonClivked(){
        if (value === "Moh"){
            setValue("Ahmed")
        } else {
            setValue("Moh")
        }
    }
    return(
        <div>
            <button onClick={buttonClivked}>Click</button>
            <h1>{value}</h1>
        </div>
    )
}
