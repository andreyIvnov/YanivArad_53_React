import { Routes, Route, Link, useParams, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { getUserById } from "../../../Utils"


function Details_Lab_07() {
    const [userData, setUserData] = useState({ name: "", email: "", city: "" })

    const obj = useParams()

    const fetchUser = async () => {
        const { data: user } = await getUserById(obj.id)
        setUserData({ name: user.name, email: user.email, city: user.address.city })
    }


    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <>
            <div style={{textAlign:"left"}}>
                <h2>User Data:</h2>
                <strong>name:</strong> {userData.name} <br />
                <strong>email:</strong> {userData.email} <br />
                <strong>city:</strong> {userData.city} <br />

                <Link to="posts">User's Posts</Link><br />
                <Link to="todos">User's Todos</Link>

                <Outlet/>
            </div>
        </>
    )
}

export default Details_Lab_07