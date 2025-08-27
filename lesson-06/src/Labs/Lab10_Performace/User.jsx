import { useState, useEffect } from "react"
import { getTodosByUserId } from "../../Utils";
import Task from "./Task";

function User({userInfo}) {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const response = await getTodosByUserId(userInfo.id, 3);
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    fetchTodos();
    // useEffect(() => {
    // }, [userInfo.id]);

  return (
    <>
    <div style={{textAlign: 'left', border: '1px solid black', padding: '10px', borderRadius: '5px', marginBottom: '10px'}}>
        <strong>ID: </strong>
        <span>{userInfo.id}</span>&nbsp;&nbsp;&nbsp;
        <strong>Name: </strong>
        <span>{userInfo.name}</span>&nbsp;&nbsp;&nbsp;
        <strong>Email: </strong>
        <span>{userInfo.email}</span>&nbsp;&nbsp;&nbsp;
        {todos && todos.length > 0 && (
            <div style={{textAlign:'center'}}> <br />
                <strong>Todos:</strong>
                <ul>
                    {todos.map(todo => (
                        <Task key={todo.id} taskInfo={{title: todo.title, completed: todo.completed}} />
                    ))}
                </ul>
            </div>
        )}
    </div>
    </>
  )
}

export default User