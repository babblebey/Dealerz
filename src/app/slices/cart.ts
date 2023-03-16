import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../types";

type SliceState = { state: 'loading' } | { state?: 'finished', items: Product[] }

const initialState: SliceState = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [ ...state.items, action.payload ]
        },
        removeFromCart: (state, action) => {
            // Get Index of Current Item
            const index = state.items.findIndex(item => item.id === action.payload.id)

            // Create New Cart
            let newCart = [ ...state.items ]

            // If Index is found, Splice Item from Array using its index
            if (index >= 0) {
                newCart.splice(index, 1)
            }

            // Set the Array to state
            state.items = newCart;
        }
    }
})

// Cart Item Getter
export const cartItems = (state: { cart: { items: Product[] } }) => {
    return state.cart.items
}

// Cart Items Count
export const cartItemsCount = (state: { cart: { items: Product[] } }) => {
    return state.cart.items.length
}

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;