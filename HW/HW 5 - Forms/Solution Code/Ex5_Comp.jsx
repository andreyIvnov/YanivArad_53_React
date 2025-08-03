
import axios from "axios"
import { useState } from "react"
import { getUserData, updateUserData } from "./utils"
export default function Ex5_Comp() {
    const [userId, setUserId] = useState(0)
    const [userData, setUserData] = useState({})

    const fethUser = async () => {
        const user = await getUserData(userId)
        setUserData(user)

    }

    const updateUser = async (e) => {
        e.preventDefault()
        const resp = await updateUserData(userId, userData)
        console.log(resp)
    }

    return (
        <div>

            User ID: <input onChange={e => setUserId(e.target.value)} type="text" /> <button onClick={fethUser}>Get Data</button> <br />


            <form onSubmit={updateUser}>

                Name: <input onChange={(e) => setUserData({ ...userData, name: e.target.value })} type="text" defaultValue={userData.name} /> <br />
                Email: <input onChange={(e) => setUserData({ ...userData, email: e.target.value })} type="text" defaultValue={userData.email} /> <br />
                <button>Update</button>
            </form>



        </div>
    )
}
