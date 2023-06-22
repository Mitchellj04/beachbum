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

export const editProductItem = createAsyncThunk('product/editProductItem', ({id, editedProduct}) => {
    console.log(id)
    console.log(editedProduct)
    fetch(`/products/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(editedProduct)
    })
    .then((resp) => resp.json())
    .then(data => data)
    return {id, editedProduct}
})

export const newProductItem = createAsyncThunk('product/newProductItem', (data) => {
    console.log(data)
    return fetch('/products', {
        method: 'POST',
        body: data
    })
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
        .addCase(editProductItem.fulfilled, (state, action) => {
            const index = state.products.findIndex((product) => product.id === action.payload.id)
            console.log(index)
            state.product[index] = {
                ...state.products[index],
                ...action.payload.editedProduct
            }
        })
        .addCase(newProductItem.fulfilled, (state, action) => {
            console.log(state)
            console.log(action.payload)
        })
    }
})


export default productSlice.reducer