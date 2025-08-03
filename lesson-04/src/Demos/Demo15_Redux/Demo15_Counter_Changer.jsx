import React, { useState } from 'react'
import {useDispatch} from "react-redux"
function Demo15_Counter_Changer() {
    const [input, setInput] = useState(0)
    const dispatch = useDispatch()

    const add = () => {
        dispatch({type: "INCREMENT", payload: input})
    }

     const subtract = () => {
        dispatch({type: "DECREMENT", payload: input})
    }


  return (
    <div style={{backgroundColor: "red"}}>
        <h1>Counter Changer</h1>


    <input onChange={e => setInput(+e.target.value)} type="text" />

    <button onClick={add}>+</button>
    <button onClick={subtract}>-</button>

    </div>
  )
}

export default Demo15_Counter_Changer