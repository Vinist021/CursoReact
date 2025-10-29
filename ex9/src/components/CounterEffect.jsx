import React, { useEffect, useState } from 'react'

const CounterEffect = () => {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("Number atualized");
    }, [number]);

  return (
    <div>
        <h1>Counter: {number}</h1>
        <button onClick={() => setNumber((atual) => atual + 1)}>+</button>
    </div>
  )
}

export default CounterEffect
