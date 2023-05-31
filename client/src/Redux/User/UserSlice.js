import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const createUser = createAsyncThunk('user/createUser', (info) => {
    return fetch('/user', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(info)
    })
    .then((resp) => resp.json())
    .then((data) => data)
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
        .addCase(createUser.fulfilled, (state) => {
            console.log(state)
        })
    }
})


export default userSlice.reducer