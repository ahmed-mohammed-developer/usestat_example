import { useState } from "react";

export default function InputText2(){
    const [text, setText] = useState("")

    function handleChange (e){
       return setText(e.target.value)
    }
    return(

        <>
        <input 
        type="text"
        value={text}
        onChange={handleChange}
        />
        <p>{text}</p>
        </>
    )
}