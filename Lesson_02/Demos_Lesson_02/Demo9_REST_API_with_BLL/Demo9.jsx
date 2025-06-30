import { useState } from "react"
import { getItems, getItem } from "./Demo9Utils"

function Demo9Comp() {
    const [users, setUsers] = useState([])


    const getData = async () => {
        const data = await getItems("https://jsonplaceholder.typicode.com/users")
        setUsers(data)
    }

    return (
        <div>
            Demo9Comp 
            <button onClick={getData}>Get Users</button> <br />

            <ul>

            {users.map((user) => <li key={user.id}>{user.name}</li>)}

            </ul>

        </div>
    )
}

export default Demo9Comp
