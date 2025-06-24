import { useState } from "react"

function Ex_01_State() {
    const [total, setTotal] = useState(0)
    const [inputNumber, setInputNumber] = useState(0)

    return (
        <>
            <strong>{total}</strong>
            <br />
            <input type="number" name="counter" onChange={e => setInputNumber(e.target.value)} />
            <button style={{ border: "2px solid green" }} onClick={() => { setTotal((+total) + (+inputNumber)) }}>+</button>
        </>
    )
}

export default Ex_01_State