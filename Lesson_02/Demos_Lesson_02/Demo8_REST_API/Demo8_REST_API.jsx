import axios from "axios"
import { useState } from "react"

function Demo8_REST_API() {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    const [userId, setUserId] = useState(0)

    const getUsers = async () => {
        const resp = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(resp.data)
    }

    const getUser = async () => {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        setUser(resp.data)
    }

    const addUser = async () => {
        const newUser = { name: "Ronen", email: "ronen@gmail.com" }
        const resp = await axios.post("https://jsonplaceholder.typicode.com/users", newUser)
        console.log(resp)
    }

    const updateUser = async  () => {
        const id = 1
        const data = {name: "Avi Cohen"}
        const resp = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, data )
        // const resp = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, data )
        console.log(resp.data)
        // axios.put
    }


  const deleteUser = async  () => {
        const id = 1
        const resp = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}` )
        console.log(resp.data)
    }
    return (
        <div>
            <h1>Users:</h1>
            <button onClick={getUsers}>Get users</button> <br />

            <ul>

                {users.map((user) => <li key={user.id}>{user.name} {user.email}</li>)}

            </ul>


            <br />

            ID:  <input onChange={e => setUserId(+e.target.value)} type="number" min={1} max={10} /> <button onClick={getUser}>Get User Data</button> <br />


            name: {user.name} <br />
            email: {user.email} <br />

         <br />

         <button onClick={addUser}>Add User</button>
         <button onClick={updateUser}>Update User</button>
         <button onClick={deleteUser}>Delete User</button>
        </div>
    )
}

export default Demo8_REST_API
