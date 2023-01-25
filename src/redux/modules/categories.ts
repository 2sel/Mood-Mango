import type { Reducer } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

// export const { addTodo, deleteTodo, toggleTodo, updateTodo, toggleDisplay } =
//   todosSlice.actions;
export default categorySlice.reducer;
