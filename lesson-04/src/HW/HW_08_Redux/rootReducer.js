const initialState = {
    totalPrice: 0,
    products: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return { ...state, products: [...state.products, action.payload], totalPrice: +state.totalPrice + +action.payload.price }

        case 'REMOVE_PRODUCT': {
            const indexOfProd = state.products.findIndex(pr => pr.id === action.payload)

            if (indexOfProd !== -1) {
                const newTotlPrice = +state.totalPrice - +state.products[indexOfProd].price;

                const prods = state.products.filter((prod) => prod.id !== action.payload);
                return { ...state, products: prods, totalPrice: newTotlPrice }
            }
            return state;
        }

        default:
            return state;
    }
}

export default productReducer