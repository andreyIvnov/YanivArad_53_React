import { useDispatch } from "react-redux"
function Car(props) {
    // car: model, year, color
    console.log(props.carData.id)
    const dispatch = useDispatch()

    return (
        <div style={{ border: "2px solid black" }}>


            Model: {props.carData.model}  <br />
            Year: {props.carData.year}  <br />
            Color: {props.carData.color} <br />
            <button onClick={() => dispatch({type: "DELETE_CAR", payload: props.carData.id})}>Delete</button>

        </div>
    )
}

export default Car