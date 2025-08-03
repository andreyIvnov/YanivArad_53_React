import React, { useState } from 'react'
import Ex1_CompB from './Ex1_CompB'

export default function Ex1_CompA() {
    const [input, setInput] = useState("")
    return (
        <div style={{ backgroundColor: "red", width: "40%" }}>
            CompA <br />
            <input onChange={(e) => setInput(e.target.value)} type="text" />

            <br />
            <Ex1_CompB userInput={input} />

        </div>
    )
}
