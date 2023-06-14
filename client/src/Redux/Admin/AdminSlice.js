import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const adminSignIn = createAsyncThunk('admin/adminSignIn', (admin) => {
    return fetch('/admin', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(admin)
    })
    .then((resp) => resp.json())
    .then((data) => data)
})

export const newProduct = createAsyncThunk('admin/newProduct', () => {

})

const initialState = {
    admin: [],
    adminLoggedIn: false,
    errors: []
}


const adminSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(adminSignIn.fulfilled, (state, action) => {
            if (action.payload.errors){
                console.log(action.payload)
                state.errors = action.payload.errors
                state.adminLoggedIn = false
                state.admin = null
            }
            else {
                console.log(action.payload)
                state.admin = action.payload 
                state.adminLoggedIn = true
                state.errors = []
            }
            
        })
    }
})


export default adminSlice.reducer