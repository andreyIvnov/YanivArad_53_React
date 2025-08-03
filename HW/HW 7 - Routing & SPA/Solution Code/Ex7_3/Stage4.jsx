const Stage4 = () => {
  return (
    <div>
      <strong>First Name:</strong> {sessionStorage['fname']} <br />
      <strong>Last Name:</strong> {sessionStorage['lname']} <br />
      <strong>City:</strong> {sessionStorage['city']}
    </div>
  );
};

export default Stage4;
