import React, { useState } from 'react'

const ClickEvent = () => {


    const [number, setNumber] = useState(0);

    const increment = () =>{
        setNumber(number + 1)
    }

    const decrement = () => {
        setNumber(number - 1)
    }

    const Reset =() => {
        setNumber(0)
    }

  return (
    <div>
        <h1> {number} </h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default ClickEvent