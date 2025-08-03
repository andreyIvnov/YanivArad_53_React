import { useState, useEffect } from 'react';
import { getAll } from './utils';
import { Link } from 'react-router-dom';

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAll(usersUrl);
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Usernames</h2>
      <ul>
        {users?.map((user) => {
          return (
            <li key={user.id}>
              {/* Option 1 */}
              {/* <Link to={user.id.toString()}>{user.username}</Link> */}
              {/* Option 2 */}
              <Link to={`/user/${user.id}`}>{user.username}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
