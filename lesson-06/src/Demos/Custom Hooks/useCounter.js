import { useState } from "react"


const useCounter = (initState = 0) => {
    const [count, setCount] = useState(initState)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    return [count, increment, decrement]


}

export default useCounter