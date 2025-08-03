import { useNavigate } from 'react-router-dom';

const Stage1 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h4>Welcome</h4>
      <button onClick={() => navigate('/stage2')}>Start</button>
    </div>
  );
};

export default Stage1;
