import {useEffect, useState} from 'react'
import { getUsers } from './Ex7_utils'
import { Link } from 'react-router-dom'
function Ex7_Master() {
    const [users, setUsers] = useState([])
    const fetchUsers = async () => {
        const usersFromWS = await getUsers()
        setUsers(usersFromWS)
    }


    useEffect(() => {
        fetchUsers()
    }, [])

  return (
    <div>

        <h1>Users:</h1>

        <ul>
            {
                users.map((user) => <li key={user.id}><Link to={`/user/${user.id}`} >{user.name}</Link></li>)
            }
        </ul>

    </div>
  )
}

export default Ex7_Master