import { useState } from "react"


export default function Counter2(){
    const [count, setCount] = useState(5)

    const increment = () => {
        setCount(count + 5);
    }
    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}