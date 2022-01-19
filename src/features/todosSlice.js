import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5000/api/";

const initialState = {
  todos: [],
  addTodoStatus: "",
  addTodoError: "",
  getTodosStatus: "",
  getTodosError: "",
  deleteTodoStatus: "",
  deleteTodoError: "",
  updateTodoStatus: "",
  updateTodoError: "",
};


const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {},
 
  
    
});

export default todosSlice.reducer;
