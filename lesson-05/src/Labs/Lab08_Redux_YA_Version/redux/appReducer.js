function appReducer(initState = [{ id: 1, fname: "Avi", lname: "Cohen", age: 30 }], action) {

    switch (action.type) {
        case "ADD":
            return [...initState, action.payload]

        case "UPDATE":
            const usersCopy = [...initState]
            const index = usersCopy.findIndex((user) => user.id === action.payload.id)
            if (index === -1) return initState

            usersCopy[index] = action.payload
            return usersCopy

           case "DELETE":
                return initState.filter(user => user.id !== action.payload)


        default:
            return initState
    }



}

export default appReducer