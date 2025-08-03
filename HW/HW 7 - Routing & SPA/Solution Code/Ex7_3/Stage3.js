import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Stage3 = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const next = () => {
    sessionStorage['city'] = city;
    navigate('/stage4');
  };

  return (
    <div>
      City:{' '}
      <select defaultValue='' onChange={handleChange}>
        <option value='' disabled>
          Choose a City
        </option>
        <option value='Haifa'>Haifa</option>
        <option value='Afula'>Afula</option>
        <option value='Eilat'>Eilat</option>
      </select>
      <br /> <br />
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Stage3;
