import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', () => {
    return fetch('/products')
    .then((r) => r.json())
    .then((items) => items)
})


const initialState = {
    products: [],
    errors: []
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
                // console.log(action.payload)
                state.products = action.payload
                state.errors = []
        })
    }
})


export default productSlice.reducer