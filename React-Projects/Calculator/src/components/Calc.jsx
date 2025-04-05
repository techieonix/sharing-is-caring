import React, { useState } from 'react'

const Calc = () => {
    const [n1, setN1] = useState(null)
    const [n2, setN2] = useState(null)
    const [result, setResult] = useState(null)
    

    return (
        <>
            <input type="number" placeholder='Enter n1' onChange={(e) => setN1(Number(e.target.value))}/>
            <input type="number" placeholder='Enter n2' onChange={(e) => setN2(Number(e.target.value))}/>
            <button onClick={() => setResult(n1 + n2)}>+</button>
            <button onClick={() => setResult(n1 - n2)}>-</button>
            <button onClick={() => setResult(n1 * n2)}>*</button>
            <button onClick={() => setResult(n1 / n2)}>/</button>
            <p>Result: {result}</p>
        </>
    )
}

export default Calc