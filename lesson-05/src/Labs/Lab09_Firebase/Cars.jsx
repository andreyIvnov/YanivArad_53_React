import { useDispatch, useSelector } from "react-redux"

function Cars() {
    const dispatch = useDispatch();
    const cars = useSelector(state => state.cars);

    const removeCar = (e) => {
        dispatch({ type: "REMOVE_CAR", payload: e.target.id });
    }
    
    return (
        <>
            <div>
                <table border={3}>
                    <thead>
                        <tr>
                            <th style={{padding: "8px"}}>Model</th>
                            <th style={{padding: "8px"}}>Year</th>
                            <th style={{padding: "8px"}}>Color</th>
                            <th style={{padding: "8px"}}></th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: "left" }}>
                        {cars.map(car => {
                            // {console.log(car)}
                            return (
                                <tr key={car.id}>
                                    <td style={{padding: "8px"}}>{car.model}</td>
                                    <td style={{padding: "8px"}}>{car.year}</td>
                                    <td style={{padding: "8px"}}><input type="color" defaultValue={car.color} /></td>
                                    <td><button style={{border:'1px solid black'}} id={car.id} onClick={removeCar}>DELETE</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Cars