import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getItem } from './utils';

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getItem(usersUrl, id);
      setUser(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3>{user.username}'s Details</h3>
      <strong>Name:</strong> {user.name} <br />
      <strong>Email:</strong> {user.email} <br />
      <strong>Street:</strong> {user.address?.street} <br />
      <strong>City:</strong> {user.address?.city} <br />
      <br />
      {/* Ex8_2 */}
      <Link to='posts'>Posts</Link> <Link to='todos'>Todos</Link>
      <Outlet />
    </div>
  );
};

export default User;
