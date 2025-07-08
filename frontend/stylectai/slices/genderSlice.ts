import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    gender: "women",
};

const genderSlice = createSlice({
    name: "gender",
    initialState,
    reducers: {
        changeGender: (state, action) => {
            state.gender = action.payload;
        }
    }
})

export const {changeGender } = genderSlice.actions
export default genderSlice.reducer;