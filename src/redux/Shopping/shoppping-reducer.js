import * as actionTypes from './shopping-types';
import crafts from "../../data/crafts.json";

const INITIAL_STATE = {
    products: crafts,
    cart: []
}

// Do somethinng to the state based on action
const shoppingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const itemToAdd = state.products.find(craft => craft.id === action.payload);
            const inCart = state.cart.find(item => item.id === action.payload ? true : false)
            // Spread the state to return new state object with changes
            return {
                ...state,
                products: [...state.products, state.products.map(item => item.id === action.payload && (item.quantity -= 1))],
                cart: inCart
                    ? state.cart.map(item =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1, cartQuantity: item.cartQuantity + 1 }
                            : item)
                    : [...state.cart, { ...itemToAdd, cartQuantity: 1 }]
            }
        case actionTypes.REMOVE_FROM_CART:
            const moreThanOne = state.cart.find(item => item.id === action.payload && item.cartQuantity > 1) ? true : false;
            return {
                products: [...state.products, state.products.map(item => item.id === action.payload && (item.quantity += 1))],
                cart: moreThanOne
                    ? state.cart.map(item =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity + 1, cartQuantity: item.cartQuantity - 1 }
                            : item)
                    : state.cart.filter(item => item.id !== action.payload)
            };
        default: return state;
    }
}


export default shoppingReducer;