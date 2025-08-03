import axios from "axios"
import { useEffect, useState } from "react"
const url = "https://jsonplaceholder.typicode.com/todos"

function Ex6_Child(props) { // props: {id: 1}
    const [todos, setTodos] = useState([])

    const fetchTodos = async () => {
        const resp = await axios.get(`${url}?userId=${props.id}`)
        setTodos(resp.data)
    }

    useEffect(() => {
        console.log("Useeffect")
        fetchTodos()
    }, [props.id])


    return (
        <div>Ex6_Child

            <ul>
                {

                    todos.map((todo) => <li key={todo.id}>{todo.title}</li>).splice(0, 5)

                }
            </ul>



        </div>
    )
}

export default Ex6_Child