import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const reset = () => {
        setCount(0);
    }
    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        if(count>0){
            setCount(count-1);
        }
    }
    return(
        <>
            <h2>{count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrement}>decrement</button>
        </>
    )
}

export default Counter;