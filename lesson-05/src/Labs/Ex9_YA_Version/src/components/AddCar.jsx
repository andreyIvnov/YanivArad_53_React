import { useState } from "react"
import { useDispatch } from "react-redux"
import {v4 as uuid} from "uuid"
function AddCar() {
    const [carData, setCarData] = useState({ model: "", year: 0, color: "" })
    const dispatch = useDispatch()

    return (
        <div>


            Model: <input type="text" onChange={e => setCarData({ ...carData, model: e.target.value })} /> <br />
            Year: <input type="text" onChange={e => setCarData({ ...carData, year: +e.target.value })} /> <br />
            Color: <input type="text" onChange={e => setCarData({ ...carData, color: e.target.value })} /> <br />

            <button onClick={() => dispatch({type: "ADD_CAR", payload: {...carData, id: uuid(), status: "new"}})}>Add</button>

        </div>
    )
}

export default AddCar