import { v4 as uuidv4 } from 'uuid';

const initialState = {
  products: [
    { id: uuidv4(), name: 'PC', price: 150 },
    { id: uuidv4(), name: 'Watch', price: 80 },
  ],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD': {
      return {
        ...state,
        products: [...state.products, { id: uuidv4(), ...action.payload }],
      };
    }

    case 'REMOVE': {
      const products = state.products.filter(
        (prod) => prod.id !== action.payload
      );

      return { ...state, products };
    }

    default:
      return state;
  }
};

export default productsReducer;
