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
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if(itemIndex >= 0 ){
                state.cartItems[itemIndex].cartQuantity += 1
            }
            else {
                const addQuantity = {...action.payload, cartQuantity: 1}
                state.cartItems.push(addQuantity)
            }
        },
        clearCart(state, action){
            // state.cartItems.remove
            // state.cartTotalQuantities = 0,
            // state.cartTotalAmount = 0

        },
        removeItem(state, action){
           const remove = state.cartItems.filter((item) => item.id !== action.payload.id)
           state.cartItems = remove
        },
        decreaseCart(state, action){
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1
            }else {
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
            }
        },
        increaseCart(state, action){
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            console.log(state.cartItems[itemIndex])
            console.log(state.cartItems[itemIndex].cartQuantity)
            if(state.cartItems[itemIndex].cartQuantity > 0){
                state.cartItems[itemIndex].cartQuantity += 1
            }
        },
        cartTotals(state, action){
            let {total, quantity} = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const {price, cartQuantity} = cartItem
                    const itemTotal = price * cartQuantity

                    cartTotal.total += itemTotal
                    cartTotal.quantity += cartQuantity

                    return cartTotal
                },
                {
                    total: 0,
                    quantity: 0
                }
            )
            state.cartTotalAmount = total
            state.cartTotalQuantities = quantity
        }
    },
})

export const {addCart, cartTotals} = cartSlice.actions
export const {removeItem} = cartSlice.actions
export const {decreaseCart}= cartSlice.actions
export const {increaseCart} = cartSlice.actions
export const {clearCart} = cartSlice.actions

export default cartSlice.reducer