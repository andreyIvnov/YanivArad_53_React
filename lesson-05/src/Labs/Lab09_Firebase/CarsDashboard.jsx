import { useDispatch, useSelector } from "react-redux"
import AddCar from "./AddCar"
import Cars from "./Cars"
import { useEffect } from "react";
import { addDocToFB, deleteDocById, getAllDocsByCollectionName } from "../../Utils/fdbManager";

function CarsDashboard() {
    const dispatch = useDispatch();
    const allCarsCollections = useSelector(state => state);

    useEffect(() => {
        const fetchCars = async () => {
            const allCars = await getAllDocsByCollectionName("cars");
            dispatch({ type: 'SET_CARS', payload: allCars });
        };
        fetchCars();
    }, [])


    const saveChanges = () => {

        allCarsCollections.removedCars.forEach(carToRemove => {
            if(carToRemove.id.length < 30)
                deleteDocById("cars", carToRemove.id);
        });

        allCarsCollections.cars.forEach(car => {
            if(car.id.length > 20){
                const justAddedCarId = addDocToFB("cars", {model: car.model, year: +car.year, color: car.color});
                justAddedCarId.then(id => {
                    dispatch({ type: "UPDATE_CAR_ID", payload: { ...car, newId: id } });
                });
            }
        });

        dispatch({ type: "RESET_REMOVED_CARS" });
    }
    
    return (
        <>
            <div>
                <AddCar />
                <Cars /><br />
                <button style={{border:'1px solid black'}} onClick={saveChanges}>Save Changes</button>
            </div>
        </>
    )
}

export default CarsDashboard