import { useState } from "react"
import { useDispatch } from "react-redux"
function UsersEditor() {

    const [user, setUser] = useState({ id: 0, fname: "", lname: "", age: 0 })
    const dispatch = useDispatch()

    const add = () => {
        dispatch({type: "ADD", payload: user})
    }

    const update = () => {
        dispatch({type: "UPDATE", payload: user})
    }


     const remove = () => {
        dispatch({type: "DELETE", payload: user.id})
    }


    return (
        <div style={{ border: "3px solid red" }}>

            ID: <input onChange={e => setUser({ ...user, id: +e.target.value })} type="number" min={1} max={999} /> <br />

            First Name: <input onChange={e => setUser({ ...user, fname: e.target.value })} /> <br />

            Last Name: <input onChange={e => setUser({ ...user, lname: e.target.value })} /> <br />

            Age: <input onChange={e => setUser({ ...user, age: +e.target.value })} type="number" min={1} max={99} /> <br />

            <button onClick={add}>ADD</button>
            <button onClick={update}>UPDATE</button>
            <button onClick={remove}>DELETE</button>
        </div>
    )
}

export default UsersEditor