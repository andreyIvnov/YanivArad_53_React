import { useEffect, useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom"
import { getUserById } from "../../Utils";


function Routin_SPA_HW_Details() {
    const [userData, setUserData] = useState({ name: '', email: '', city: '' });

    const urlObj = useParams();

    const getUserData = async () => {
        if (urlObj && urlObj.id) {
            const { data: userInfo } = await getUserById(urlObj.id);
            if (userInfo) {
                setUserData({ name: userInfo.name, email: userInfo.email, city: userInfo.address?.city });
            }
        }
    }

    useEffect(() => {
        getUserData();
    }, [])


    return (<>
        <div style={{ textAlign: 'left', background: 'lightblue', padding: '10px 15px', display: 'flex', justifyContent: 'space-between' }}>
            {userData &&
                <>
                    <div className="user-info" style={{ width: '45%' }}>
                        <h3>User Data:</h3>
                        &nbsp;&nbsp;<strong>Name: </strong> {userData.name} <br />
                        &nbsp;&nbsp;<strong>Email: </strong> {userData.email} <br />
                        &nbsp;&nbsp;<strong>City: </strong> {userData.city} <br /><br />
                        <Link style={{ border: '1px solid black', borderRadius: '5px', padding: '2px 4px 2px 4px' }} to="posts">User's Posts</Link>&nbsp;&nbsp;
                        <Link style={{ border: '1px solid black', borderRadius: '5px', padding: '2px 4px 2px 4px' }} to="todos">User's Todos</Link>
                    </div>
                    <div className="users-actions" style={{ width: '50%' }}>
                        <Outlet />
                    </div>
                </>
            }
        </div>
    </>
    )
}

export default Routin_SPA_HW_Details