import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    cartTotalQuantities: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart(state, action){
            state.cartItems.push(action.payload)
        },
    },
})

export const {addCart} = cartSlice.actions

export default cartSlice.reducer