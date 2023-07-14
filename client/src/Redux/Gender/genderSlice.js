import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchAllGender = createAsyncThunk('gender/fetchAllGender', () => {
    return fetch('/genders')
    .then((resp) => resp.json())
    .then((items) => items)

})

const initialState = {
    gender: []
}

const genderSlice = createSlice({
    name: 'gender',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
        .addCase(fetchAllGender.fulfilled, (state, action) => {
                console.log(action.payload)
                state.gender = action.payload
        })
    }
})


export default genderSlice.reducer