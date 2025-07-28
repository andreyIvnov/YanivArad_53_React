import axios from "axios"
import { useState } from "react"
const url = "https://jsonplaceholder.typicode.com/users"
function Ex4() {
    const [id, setId] = useState(0)
    const [user, setUser] = useState({ name: "", email: "" })
    const [titles, setTitles] = useState([])

    const getUserData = async () => {
        const resp = await axios.get(`${url}/${id}`)
        setUser({ name: resp.data.name, email: resp.data.email })

        if (resp.data.name.startsWith("E")) {
            const resp2 = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
            const todos = resp2.data
            setTitles(todos.map(todo => todo.title))
           
           
        } else {
            setTitles([])
        }





        // Option 2
        // if (resp.data.name.startsWith("E")) {
        //     const resp2 = await axios.get("https://jsonplaceholder.typicode.com/todos")
        //     const allTodos = resp2.data
        //     const userTodos = allTodos.filter(todo => todo.userId == id)
        //     setTitles(userTodos.map((todo => todo.title)))}



    }

    return (
        <div>

            <input onChange={e => setId(e.target.value)} type="number" min={1} max={10} />
            <button onClick={getUserData}>Get User Data</button> <br />

            <h5>Name: {user.name} </h5>
            <h5>Email: {user.email} </h5>
            <br />

            {
                titles.map((title) => {
                    return <div> {title}</div>
                })
            }


        </div>
    )
}

export default Ex4