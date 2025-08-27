
import { useSelector } from "react-redux"
import Car from "./Car"

function Cars() {
    const cars = useSelector((store => store.filter(car => car.status !== "deleted")))

    return (
        <div>

            <h1>Cars:</h1>




            {
                cars.map(car => {
                    return <Car carData={car} />
                })
            }




        </div>
    )
}

export default Cars