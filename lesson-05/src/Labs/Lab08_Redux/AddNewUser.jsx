import { useState } from "react";
import { useDispatch } from "react-redux"

function AddNewUser() {
    const [user, setUser] = useState({ id: "", firstName: "", lastName: "", age: "" })
    const dispatcher = useDispatch();
    
    const add = () => {
        dispatcher({ type: "ADD_USER", payload: user });
    }

    const update = () => {
        dispatcher({ type: "UPDATE_USER", payload: user });
    }

    const remove = () => {
        dispatcher({ type: "REMOVE_USER", payload: user });
    }

    return (
        <>
            <div>
                ID: <input onChange={e => setUser({ ...user, id: e.target.value })} type="text" /> <br />
                First Name: <input onChange={e => setUser({...user, firstName: e.target.value})} type="text"/> <br />
                Last Name: <input onChange={e => setUser({...user, lastName: e.target.value})} type="text"/> <br />
                Age: <input onChange={e => setUser({...user, age: e.target.value})} type="text"/> <br />
                <button onClick={add}>ADD</button>
                <button onClick={update}>UPDATE</button>
                <button onClick={remove}>DELETE</button>
            </div>
        </>
    )
}

export default AddNewUser