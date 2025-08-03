import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUsersTodosByUserId } from "../../Utils";

function Routin_SPA_HW_Todos() {
    const urlObj = useParams();
    const [allTodos, setAllTodos] = useState([])

    const getUsersTodos = async () => {
        if (urlObj && urlObj.id) {
            const { data: todos } = await getUsersTodosByUserId(urlObj.id);
            if (todos) {
                setAllTodos(todos);
            }
        }
    }

    useEffect(() => {
        getUsersTodos();
    }, [])


    return (
        <>
            <div style={{background: 'lightgreen', textAlign:'left', padding: "10px 15px 10px 15px"}}>
                <h3>Task List:</h3>
                <ul>
                    {allTodos && allTodos.map(task => {
                        return ( <li key={task.id}>{task.title}</li> )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Routin_SPA_HW_Todos