import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: {}
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        loginFailure: (state) => {
            state.isLoggedIn = false;
            state.user = {};
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = {};
        }
    }
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;