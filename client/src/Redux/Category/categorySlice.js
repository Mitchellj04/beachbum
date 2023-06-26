import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchAllCategory = createAsyncThunk('products/fetchAllProducts', () => {
    return fetch('/products-all')
    .then((resp) => resp.json())
    .then((items) => items)

})

const initialState = {
    category: []
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
        .addCase(fetchAllCategory.fulfilled, (state, action) => {
                console.log(action.payload)
                state.category = action.payload
        })
    }
})


export default categorySlice.reducer