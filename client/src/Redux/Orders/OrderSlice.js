import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const createOrder = createAsyncThunk('orders/createOrder',(order) => {
    console.log(order)
    return fetch('/orders', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(order)
    })
    .then((resp) => resp.json())
    .then((data) => data)
})


const initialState = {
    orders: [],
    errors: []
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder 
        .addCase(createOrder.fulfilled, (state, action) => {
            console.log(action.payload)
        })
    }
})

export default orderSlice.reducer