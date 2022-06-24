import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () =>{
        setCount(count + 1)
    }
    const decrement = () =>{
        setCount(count - 1)
    }
    return (
        <div>
            <input type="text" value={count}/>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <br/>
        </div>
    );
};

export default Counter;