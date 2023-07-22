import React, { useState } from 'react'

export const Sample = ({ message }) => {
    const [counter, setCounter] = useState(0)

    const [description, setDescription] = useState('My description')
    const incrementHandler = () => {
        setCounter(counter + 1)
    }
    const decrementHandler = () => {
        setCounter(counter - 1)
    }

    return (
        <div style={{ marginTop: '30px' }}>
            {message}
            <hr />
            <button onClick={incrementHandler}>+</button>
            <button onClick={decrementHandler}>-</button>
            <button onClick={() => {
                setDescription(`${description},add some desc`)
             }}
            >
                add desc
            </button>
            <p>Counter : {counter}</p>
            <p>
                Description: <b>{description}</b>
            </p>
        </div>
    )
}

export default Sample