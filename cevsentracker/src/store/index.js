import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import habitReducer from './slices/habit-track'

export default configureStore({
    reducer: {
        auth: authReducer,
        habit: habitReducer
    }
});

export { loginSuccess, loginFailure, logout } from "./slices/auth";
export { addHabit, removeHabit, updateHabit, addHabitTrack, removeHabitTrack, updateHabitTrack } from "./slices/habit-track";
