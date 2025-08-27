import { useState, useMemo } from "react"

function complicated_func(num) {
    console.log("complicated function")
    // Long logic...
    return 10
}

function Demo2_useMemo() {
    const [counter, setCounter] = useState(0)
    console.log("Comp render")


    const result = useMemo(() => complicated_func(counter), [counter])



    return (
        <div>Demo2_useMemo
            {counter}
            <button onClick={() => setCounter(counter + 1)}>Increment</button>

        </div>
    )
}

export default Demo2_useMemo