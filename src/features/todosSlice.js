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
//post request or create todo list
export const todosAdd = createAsyncThunk(
  "todos/todosAdd",
  async (todo, { rejectWithValue }) => {
    try {
      const response = await axios.post(baseURL + "todos", todo);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);
//get all todos list
export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get(baseURL + "todos");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
     //post
    [todosAdd.pending]: (state, action) => {
      return {
        ...state,
        addTodoStatus: "pending",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "",
        updateTodoError: "",
      };
    },
    [todosAdd.fulfilled]: (state, action) => {
      // state.todos.push(action.payload);
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        addTodoStatus: "success",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "",
        updateTodoError: "",
      };
    },
    [todosAdd.rejected]: (state, action) => {
      return {
        ...state,
        addTodoStatus: "rejected",
        addTodoError: action.payload,
        getTodosStatus: "",
        getTodosError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "",
        updateTodoError: "",
      };
    },
    //get
    [getTodos.pending]: (state, action) => {
      return {
        ...state,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "pending",
        getTodosError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "",
        updateTodoError: "",
      };
    },
    [getTodos.fulfilled]: (state, action) => {
      return {
        ...state,
        todos: action.payload,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "success",
        getTodosError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "",
        updateTodoError: "",
      };
    },
    [getTodos.rejected]: (state, action) => {
      return {
        ...state,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "rejected",
        getTodosError: action.payload,
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "",
        updateTodoError: "",
      };
    },
 
  },  
});

export default todosSlice.reducer;
