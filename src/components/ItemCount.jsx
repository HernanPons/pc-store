import React, { useState } from 'react'

const useCount = (initial = 0) => {
    if (initial < 0 || initial > 9) initial = 0

    const [count, setCount] = useState (initial)

    const decrement = () => {
        if (count > 0) setCount (prev => prev -1)
    }
    const increment = () => {
        if (count < 9) setCount (prev => prev +1)
    }
    const reset = () => {
        setCount(initial)
    }
    return { count, decrement, increment, reset }
}

const ItemCount = () => {
    const { count, decrement, increment, reset } = useCount();

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount