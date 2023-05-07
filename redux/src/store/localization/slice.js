import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language:"en"
}

const localizationSlice = createSlice({
    name:"localization",
    initialState,
    reducers:{
        toggleLanguage:(state, action) => {
            state.language = action.payload;
        }
    }
});

export const { toggleLanguage } = localizationSlice.actions;
export default localizationSlice.reducer;