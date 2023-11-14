import React, { useState } from 'react'
import { Button } from '@chakra-ui/react';

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
        <div style={{ display: 'flex', marginLeft: '40px' }}>
            <Button style={{ marginRight: '5px' }} onClick={decrement}>-</Button>
            <p style={{ marginLeft: '20px', marginRight: '20px' }}>{count}</p>
            <Button onClick={increment}>+</Button>
        </div>
    )
}

export default ItemCount