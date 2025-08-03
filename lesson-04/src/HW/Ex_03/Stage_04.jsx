import { useEffect } from "react"
import { useState } from "react"

function Stage_04() {
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("userData"))
        if (data) {
            setUserData(data);
        }

    }, [])


    return (
        <>
            <div style={{borderRadius:'20%', textAlign: 'left', border: '2px solid red', padding:'10px 20px 10px 20px', background:'lightgrey'}}>
                {userData &&
                    <>
                        <strong>Firs Name: </strong> {userData.firstName} <br />
                        <strong>Last Name: </strong> {userData.lastName} <br />
                        <strong>From: </strong> {userData.city}
                    </>
                }
            </div>
        </>
    )
}

export default Stage_04