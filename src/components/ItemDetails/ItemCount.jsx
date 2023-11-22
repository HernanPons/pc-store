import React, { useState } from 'react'
import { Button } from '@chakra-ui/react';

const useCount = (initial = 0) => {
    if (initial < 1 || initial > 9) initial = 1

    const [count, setCount] = useState (initial)

    const decrement = () => {
        if (count > 1) setCount (prev => prev -1)
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
    const { count, decrement, increment } = useCount();

    return (
        <div style={{ display: 'flex'}}>
            <Button onClick={decrement}>-</Button>
            <span style={{ marginLeft: '20px', marginRight: '20px', display: 'inline-block', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', userSelect: 'none' }}>{count}</span>
            <Button onClick={increment}>+</Button>
        </div>
    )
}

export default ItemCount