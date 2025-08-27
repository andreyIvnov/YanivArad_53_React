

function appReducer(cars = [], action) {

    switch (action.type) {
        case "LOAD_CARS":
            return action.payload

        case "ADD_CAR":
            return [...cars, action.payload]

        case "DELETE_CAR":
            const id = action.payload
            const index = cars.findIndex(car => car.id === id)
            if (index == -1) return cars

            const carsCopy = [...cars]

            if (cars[index].status === "new") {
                carsCopy.splice(index,1)
                return carsCopy
            }

            carsCopy[index] = {...carsCopy[index], status: "deleted"}
            return carsCopy

        default:
            return cars
    }
}

export default appReducer