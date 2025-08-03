import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserItems } from './utils';

const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

const Todos = () => {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const titles = await getUserItems(todosUrl, id);
      setTodos(titles);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h4>Todos:</h4>
      <ul>
        {todos.map((title, index) => {
          return <li key={index}>{title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todos;
