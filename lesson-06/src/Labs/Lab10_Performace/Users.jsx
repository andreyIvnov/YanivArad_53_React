import { useState, useEffect } from "react"
import { getAllUsers } from "../../Utils";
import User from "./User";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then(response => {
            setUsers(response.data);
        });
    }, []);


  return (
    <>
    <div style={{ border: '2px solid red', padding: '10px', borderRadius: '5px'}}>
        <h3>Users</h3>
        {users && users.length > 0 && users.map(user => {
            return <User key={user.id} userInfo={{name: user.name, email: user.email, id: user.id}} />
        })}
    </div>
    </>
  )
}

export default Users