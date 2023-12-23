import axios from "axios";
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from "./tasksSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "<https://62584f320c918296a49543e7.mockapi.io>";

export const fetchTasks = createAsyncThunk("tasks/fetchAll", async (_, thunkAPI) => {

  try {
    const respons = await axios.get("/tasks");
    console.log(respons.data);
    return respons.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});