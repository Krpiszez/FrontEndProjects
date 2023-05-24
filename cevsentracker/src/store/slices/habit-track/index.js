import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  habits: [],
  habitTracks: [],
};

export const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits.push(action.payload);
    },
    removeHabit: (state, action) => {
      const habitId = action.payload;
      state.habits = state.habits.filter((habit) => habit.id !== habitId);
    },
    updateHabit: (state, action) => {
      const updatedHabit = action.payload;
      const index = state.habits.findIndex((habit) => habit.id === updatedHabit.id);
      if (index !== -1) {
        state.habits[index] = updatedHabit;
      }
    },
    addHabitTrack: (state, action) => {
      state.habitTracks.push(action.payload);
    },
    removeHabitTrack: (state, action) => {
      const habitTrackId = action.payload;
      state.habitTracks = state.habitTracks.filter((track) => track.id !== habitTrackId);
    },
    updateHabitTrack: (state, action) => {
      const updatedHabitTrack = action.payload;
      const index = state.habitTracks.findIndex((track) => track.id === updatedHabitTrack.id);
      if (index !== -1) {
        state.habitTracks[index] = updatedHabitTrack;
      }
    },
  },
});

export const {
  addHabit,
  removeHabit,
  updateHabit,
  addHabitTrack,
  removeHabitTrack,
  updateHabitTrack,
} = habitSlice.actions;

export default habitSlice.reducer;
