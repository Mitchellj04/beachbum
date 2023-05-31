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
    return fetch('/users')
    .then((resp) => resp.json())
    .then((data) => console.log(data))
})

const initialState = {
    user: [],
    errors: []
}


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
})


export default userSlice.reducer