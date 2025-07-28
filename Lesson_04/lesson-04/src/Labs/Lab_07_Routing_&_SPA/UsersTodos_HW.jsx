import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getUsersTodosByUserId } from "../../../Utils";

function UsersTodos_HW() {
    const urlObj = useParams();
    const [usersTodos, setUsersTodos] = useState([])

    const populateUsersTodos = async () => {
        if (urlObj && urlObj.id) {
            const { data : usersTodos} = await getUsersTodosByUserId(urlObj.id)
            if (usersTodos) {
                setUsersTodos(usersTodos);
            }
        }
    }

    useEffect(() => {
        populateUsersTodos();
    }, [])
    

    return (
        <>
            <div>
                <ul>
                    {usersTodos && usersTodos.map(task => {
                        return (
                            <li key={task.id}>{task.title}</li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default UsersTodos_HW