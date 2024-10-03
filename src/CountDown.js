import { useState } from "react"


export default function CountDown(){
    const [count, setCount] = useState(100)

    function docrement(){
        return setCount(count - 1)
    }

    return(
            <>
            <p>Count: {count}</p>
            <button onClick={docrement}>Decrement</button>
            </>
    )
}