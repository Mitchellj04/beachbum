import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', () => {
    return fetch('/products-all')
    .then((resp) => resp.json())
    .then((items) => items)

})

export const fetchProductItem = createAsyncThunk('product/fetchProductITem', (id) => {
    return fetch(`/products/${id}`)
    .then((resp) => resp.json())
    .then((data) => data)
})

const initialState = {
    products: [],
    item: [],
    errors: []
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
                console.log(action.payload)
                state.products = action.payload
                state.errors = []
        })
        .addCase(fetchProductItem.fulfilled, (state, action) => {
           state.item = action.payload
           state.errors = []
        })
    }
})


export default productSlice.reducer