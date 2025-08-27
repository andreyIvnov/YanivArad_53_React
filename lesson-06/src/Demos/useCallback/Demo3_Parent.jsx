import { useState, useCallback } from "react"
import Demo3_Child from "./Demo3_Child"
 
function Demo3_Parent() {
    console.log("Parent Render")
    const [text, setText] = useState("")
    const [counter, setCounter] = useState(0)


   const handleDataToChild = useCallback(() => {
        // logic...
        console.log("hello from function!")
    }, [])



    return (
        <div>Demo3_Parent

            <h1>Text: {text}</h1>
            <h1>Counter: {counter}</h1>

            <button onClick={() => setText(text + "A")} >Add Text</button>
            <button onClick={() => setCounter(counter + 1)} >Increment</button>


            <Demo3_Child callback={handleDataToChild} />

        </div>
    )
}

export default Demo3_Parent