const initialState = {
    products: []
};

// state - current state
// action - { type: "WHAT_TO_DO", [payload: value] }
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': {
            return { ...state, products: [...state.products, action.payload] };
        }

        case 'DELETE': {
            const products = [...state.products];
            const productsIndex = state.products.findIndex(product => product.name === action.payload)
            if (productsIndex !== -1) {
                products.splice(productsIndex, 1)
            }
            return { ...state, products };
        }

        default:
            return state;
    }
};

export default counterReducer;