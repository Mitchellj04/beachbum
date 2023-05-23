import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchAllProducts = createAsyncThunk('products/fetchAll', () => {
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
            if(action.payload.errors){
                state.errors = action.payload.errors
            }
            else{
                state.products.push(action.payload)
                state.errors = []
            }
        })
    }
})


export default productSlice.reducer