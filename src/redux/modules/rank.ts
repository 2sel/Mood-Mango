import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../config/configStore";
import { RootState } from "../config/configStore";

interface datatype {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  displaytoggle: boolean;
}

export const getMusic = createAsyncThunk(
  "todos/getTodo",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3003/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  rank: [],
  isLoading: false,
  //   error: null,
};

const todosSlice = createSlice({
  name: "rank",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getTodo
    builder.addCase(getMusic.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMusic.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rank = action.payload;
    });
    builder.addCase(getMusic.rejected, (state, action) => {
      state.isLoading = false;
      //   state.error = action.payload;
    });
  },
});

// export const { addTodo, deleteTodo, toggleTodo, updateTodo, toggleDisplay } =
//   todosSlice.actions;
export default todosSlice.reducer;
