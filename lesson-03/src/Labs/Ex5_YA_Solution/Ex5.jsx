import axios from "axios"
import { useState } from "react"
const url = "https://jsonplaceholder.typicode.com/users"
function Ex5() {
    const [id, setId] = useState(0)
    const [user, setUser] = useState({})

    const handleSubmit1 = async (e) => {
        e.preventDefault()
        const resp =  await axios.get(`${url}/${id}`)
        setUser(resp.data)
    }

    const handleSubmit2 = async (e) => {
        e.preventDefault()
        const resp = await axios.put(`${url}/${id}`, user)
        console.log(resp.data)
    }


    return (
        <div>
            <h1>Form 1</h1>
            <form onSubmit={handleSubmit1}>
                <input onChange={e => setId(e.target.value)} type="number" min={1} max={10} /> <button type='submit'>Get User Data</button>
            </form>

            <h1>Form 2</h1>
            <form onSubmit={handleSubmit2}>
                Name: <input onChange={e => setUser({...user, name: e.target.value})} defaultValue={user.name} type="text" /> <br />
                Email: <input onChange={e => setUser({...user, email: e.target.value})} defaultValue={user.email} type="text" /> <br />
                <button type="submit">Update</button>

            </form>




        </div>
    )
}

export default Ex5