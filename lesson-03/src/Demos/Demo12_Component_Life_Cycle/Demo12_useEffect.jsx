import { useEffect, useState } from "react"
import Demo12_Child from "./Demo12_Child"
import axios from "axios"
function Demo12_useEffect() {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState("Avi")



    useEffect(() => {
        // will run on EVERY state / prop change
        console.log("useEffect1")
        // setCounter(counter + 1) 
    })
    async function fetchData() {
            const resp = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(resp.data)
            // continue logic...
        }

    useEffect(() => {
        // will run once ONLY
        console.log("useEffect2")
        fetchData()
    }, [])


    useEffect(() => {
        console.log("useEffect3")
    }, [name])


    return (
        <div>

            <h1>Use Effect</h1>
            <h2>counter: {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>+</button>


            <h2>{name}</h2>
            <button onClick={() => setName("Dana")}>Change Name</button>

            {/* <Demo12_Child /> */}

        </div>
    )
}

export default Demo12_useEffect