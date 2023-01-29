import type { Reducer } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const toTopSlice = createSlice({
  name: "toTop",
  initialState,
  reducers: {
    changeVideoiPlay: (state, action) => {
      // console.log(action.payload);
      return action.payload;
    },
  },
});

export const { changeVideoiPlay } = toTopSlice.actions;
export default toTopSlice.reducer;
