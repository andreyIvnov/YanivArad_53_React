// Action -> Object

// Type - Mandatory (String) 
// Payload - Not-Mandatory (any) 

function AppReducer(initState = {counter: 0}, action) {
    if (action.type === "INCREMENT") {
        return {...initState, counter: initState.counter + action.payload}
    } else if(action.type === "DECREMENT") {
         return {...initState, counter: initState.counter - action.payload}

    }
    return initState
}

export default AppReducer
