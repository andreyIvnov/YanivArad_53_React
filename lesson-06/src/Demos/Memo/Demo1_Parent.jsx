import { useState } from 'react'
import Demo1_Child from './Demo1_Child'

function Demo1_Parent() {
    const [counter, setCounter] = useState(0)
    const [text, setText] = useState("")
    console.log("Parent Render")
    return (
        <div style={{border: "2px solid red"}}>
            Demo1_Parent <br />

            Counter: {counter} <br />
            Text: {text} <br />

            <button onClick={()  => setCounter(counter + 1)}>Increment</button> <br />
            <button onClick={()  => setText(text + "A")}>Add Text</button> <br />

            <Demo1_Child counter={counter} />

        </div>
    )
}

export default Demo1_Parent