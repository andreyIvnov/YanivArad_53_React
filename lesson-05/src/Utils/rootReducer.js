const initialState = {
    users: [
        { id: 1, firstName: 'John', lastName: 'Doe', age: 30 }
    ]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return { ...state, users: [...state.users, action.payload] }

        case 'UPDATE_USER': {
            const usersCopy = [...state.users];
            const indexOfUser = state.users.findIndex(user => user.id === action.payload.id)
            
            if (indexOfUser === -1) return state;

            usersCopy[indexOfUser] = action.payload;
            return { ...state, users: usersCopy }
        }

        case 'REMOVE_USER': {
            return { ...state, users: state.users.filter(user => user.id !== action.payload.id) };
        }

        default:
            return state;
    }
}

export default userReducer