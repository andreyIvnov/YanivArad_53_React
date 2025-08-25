const initialState = {
    cars: [],
    removedCars: []
}

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CARS':
            return { ...state, cars: action.payload }

        case 'ADD_CAR':
            return { ...state, cars: [...state.cars, action.payload] }

        case 'UPDATE_CAR': {
            const carsCopy = [...state.cars];
            const indexOfCar = state.cars.findIndex(car => car.id === action.payload.id)

            if (indexOfCar === -1) return state;

            carsCopy[indexOfCar] = action.payload;
            return { ...state, cars: carsCopy }
        }


        case "UPDATE_CAR_ID": {
            const carsCopy = [...state.cars];
            const indexOfCar = state.cars.findIndex(car => car.id === action.payload.id)

            if (indexOfCar === -1) return state;

            carsCopy[indexOfCar] = { ...carsCopy[indexOfCar], id: action.payload.newId };
            return { ...state, cars: carsCopy }
        }

        case 'REMOVE_CAR': {
            const carsCopy = [...state.cars];
            const indexOfCar = state.cars.findIndex(car => car.id === action.payload)

            if (indexOfCar === -1) return state;
            const carToRemove = state.cars[indexOfCar];
            carsCopy.splice(indexOfCar, 1);
            return { ...state, cars: carsCopy, removedCars: [...state.removedCars, carToRemove] };
        }

        case "RESET_REMOVED_CARS":
            return { ...state, removedCars: [] };

        default:
            return state;
    }
}

export default carReducer