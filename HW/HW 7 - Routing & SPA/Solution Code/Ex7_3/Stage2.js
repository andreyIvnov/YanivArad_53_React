import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Stage2 = () => {
  const [user, setUser] = useState({ fname: '', lname: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage['fname'] = user.fname;
    sessionStorage['lname'] = user.lname;
    navigate('/stage3');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        First Name:{' '}
        <input type='text' name='fname' onChange={handleChange} required />
        <br />
        Last Name: <input type='text' name='lname' onChange={handleChange} />
        <br />
        <button type='submit'>Next</button>
      </form>
    </div>
  );
};

export default Stage2;
