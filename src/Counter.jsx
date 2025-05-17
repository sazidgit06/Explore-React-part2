import { useState } from "react"

export default function Counter () {
    const [count, setCount] = useState(5);
    console.log(setCount)
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div style={
            {border: '2px solid rebeccapurple',
            padding: '10px',
            margin:'10px'}}>
            <p>Count: {count}</p>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}