import { useParams } from "react-router-dom"
import { getUser } from "./Ex7_utils"
import { useEffect, useState } from "react"

function Ex7_Details() {
    const [userData, setUserData] = useState({name: "", email: "", city: ""})

    const obj = useParams()

    const fetchUser = async () => {
        const user = await getUser(obj.id)
        setUserData({name: user.name, email: user.email, city: user.address.city})
    }


    useEffect(() => {   
        fetchUser()
    }, [])

    return (
        <div>

            <h2>User Data:</h2>

            name: {userData.name} <br />
            email: {userData.email} <br />
            city: {userData.city} <br />


        </div>
    )
}

export default Ex7_Details