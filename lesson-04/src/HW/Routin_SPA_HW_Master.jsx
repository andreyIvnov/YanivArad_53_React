import { useEffect, useState } from "react"
import { getAllUsers } from "../../Utils"
import { Link } from "react-router-dom";

function Routin_SPA_HW_Master() {
    const [allUsers, setAllUsers] = useState([])

    const fillTheUsers = async () => {
        const { data } = await getAllUsers();
        if (data) {
            setAllUsers(data);
        }
    }

    useEffect(() => {
        fillTheUsers();
    }, [])


    return (
        <>
            <div style={{ textAlign: 'left', background:'lightpink', width:'400px', padding:'5px 10px 5px 10px' }}> 
                <h3>Users:</h3>
                <ul>
                    {allUsers && allUsers.map(us => {
                        return (<li key={us.id}>
                            <Link to={`/users/${us.id}`}>{us.name}</Link><br />
                        </li>)
                    })}
                </ul>
            </div>
        </>
    )
}

export default Routin_SPA_HW_Master