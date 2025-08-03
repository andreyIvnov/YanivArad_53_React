import { useEffect, useState } from "react"
import { getAllUsers } from "../../../Utils"
import { Link } from "react-router-dom";

function UsersMaster_Lab_07() {

    const getUsersToShow = async () => {
        const { data } = await getAllUsers();
        if (data) {
            setUsers(data);
        }
    }

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsersToShow()
    }, [])


    return (
        <>
            <div>Users</div>
            <ul>

            {users && users.map(user => {
                return (
                    <li key={user.id} >
                        <Link to={`/users/${user.id}`}>{user.name}</Link> <br />
                    </li>
                )
            })}

            </ul>
        </>
    )
}

export default UsersMaster_Lab_07