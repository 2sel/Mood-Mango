import type { Reducer } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const NavbarSlice = createSlice({
  name: "Navbar",
  initialState,
  reducers: {
    getClickButton: (state, action) => {
      return action.payload;
    },
  },
});

export const { getClickButton } = NavbarSlice.actions;
export default NavbarSlice.reducer;
