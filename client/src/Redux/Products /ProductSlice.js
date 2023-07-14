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

export const editProductItem = createAsyncThunk('product/editProductItem', ({id, data}) => {
    console.log(id)
    console.log(data)
   return  fetch(`/products/${id}`, {
        method: "PATCH",
        body: data
    })
    .then((resp) => resp.json())
    .then(data => data)
    // {id, data}
})

export const newProductItem = createAsyncThunk('product/newProductItem', (data) => {
    console.log(data)
    return fetch('/products', {
        method: 'POST',
        body: data
    })
    .then((resp) => resp.json())
    .then(data => data)
})

export const deleteProductItem = createAsyncThunk('product/deleteProductItem', (item) => {
    fetch(`/products/${item.id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
    return item.id
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
            console.log(action.payload)
            state.product[index] = {
                ...state.products[index],
                ...action.payload
            }
        })
        .addCase(newProductItem.fulfilled, (state, action) => {
            if(action.payload.errors){
                state.errors = action.payload.errors
                console.log(action.payload)
            }
            else {
                console.log(action.payload)
                state.products.push(action.payload)
            }
        })
        .addCase(deleteProductItem.fulfilled, (state, action) => {
            const index = state.products.findIndex(({id}) => id === action.payload)
            state.products.splice(index, 1)
        })
    }
})


export default productSlice.reducer