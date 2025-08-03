import { useEffect, useState } from "react";
import { getTop5TodosByUserId } from "../../../Utils";

function Lab_6_Life_Cycle_Child( {userId}) {
  const [userTasks, setUserTasks] = useState([])

  useEffect(() => {
      async function fetchUsersTodos() {
        const usersTodos = await getTop5TodosByUserId(userId);
        setUserTasks(usersTodos.data)
      }

      fetchUsersTodos();
  }, [userId])


  return (
    <>
    <div>
        {userTasks && userTasks.length > 0 && 
        <table border={2} style={{border:"2px solid red"}}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Complited</th>
                </tr>
            </thead>
            <tbody>
                {userTasks.map(task => {
                    return (
                        <tr key={task.id}>
                            <td style={{textAlign:'left'}}>{task.title}</td>
                            <td>{task.completed ? "true": "false"}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        } 
    </div>
    </>
  )
}

export default Lab_6_Life_Cycle_Child