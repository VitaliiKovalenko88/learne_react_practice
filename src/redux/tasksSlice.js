import { createSlice } from "@reduxjs/toolkit";
// import { tasksInitialState } from "data/data";
// import { nanoid } from "nanoid";
import { fetchTasks } from './operations'

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export const { addTask, deleteTask, toggleCompleted, fetchingInProgress, fetchingSuccess, fetchingError } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;