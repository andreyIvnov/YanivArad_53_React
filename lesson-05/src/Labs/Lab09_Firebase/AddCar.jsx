import { useState } from "react"
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

function AddCar() {
  const dispatch = useDispatch();
  const [newcar, setNewCar] = useState({ model: "", year: "", color: "", id: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCar({ ...newcar, [name]: name === "year" ? +value : value });
  };

  const addCar = () => {
    dispatch({ type: "ADD_CAR", payload: {...newcar, id: uuidv4()} });
  }

  return (
    <>
      <div style={{ padding: "20px", border: "1px solid black" }}>
        <h2>Add New Car</h2>
        <input type="text" name="model" placeholder="Model" onChange={handleChange} /><br />
        <input type="number" name="year" placeholder="Year" onChange={handleChange} /><br />
        Color: <input type="color" name="color" onChange={handleChange} /><br /><br />
        <button style={{border:'1px solid black'}} onClick={addCar}>Add Car</button>
      </div>
    </>
  )
}

export default AddCar