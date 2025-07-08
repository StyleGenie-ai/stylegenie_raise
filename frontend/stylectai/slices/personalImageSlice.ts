import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    personalImage: "fdd",
};

const personalImageSlice = createSlice({
    name: "personalImage",
    initialState,
    reducers: {
        addPersonalImage: (state, action) => {
            console.log("am I getting here?!")
            console.log(action.payload)
            state.personalImage = action.payload;
        },
        removePersonalImage: (state) => {
            state.personalImage = ""
        }
    }
})

export const {addPersonalImage, removePersonalImage} = personalImageSlice.actions
export default personalImageSlice.reducer;