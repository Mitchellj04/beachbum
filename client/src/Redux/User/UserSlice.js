import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const createUser = createAsyncThunk('user/createUser', (info) => {
    return fetch('/users', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(info)
    })
    .then((resp) => resp.json())
    .then((data) => data)
})

export const userSignIn = createAsyncThunk('user/userSignIn', (user) => {
    return fetch('/login', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })
    .then((resp) => resp.json())
    .then((data) => data)
})

const initialState = {
    user: [],
    userLoggedIn: false,
    errors: []
}


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createUser.fulfilled, (state, action) => {
            if (action.payload.errors){
                state.errors = action.payload.errors
                state.userLoggedIn = false
                state.user = []
            }
            else{
                state.user = action.payload
                state.userLoggedIn = true 
            }

        })
        .addCase(userSignIn.fulfilled, (state, action) => {
            if (action.payload.errors){
                state.errors = action.payload.errors
                state.userLoggedIn = false
                state.user = null
            }
            else {
                state.user = action.payload 
                state.userLoggedIn = true
                state.errors = []
            }
            
        })
    }
})


export default userSlice.reducer