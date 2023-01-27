import type { Reducer } from "redux";
import { createSlice } from "@reduxjs/toolkit";

interface IMap {
  [key: string]: any;
}

// type gengre = "감성" | "드라이브" | "공부" | "운동" | "기분전환";

const musicgenre: IMap = {
  감성: ["RNB힙합", "인디음악", "뉴에이지", "로파이", "발라드", "재즈"],
  드라이브: ["외국힙합", "시티팝", "아이돌댄스곡", "디스코펑크"],
  공부: ["뉴에이지", "로파이", "재즈"],
  운동: ["외국힙합", "아이돌댄스곡", "시티팝"],
  기분전환: ["아이돌댄스곡", "시티팝", "외국힙합"],
};

const initialState: String[] = [];

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories: (state, action) => {
      return musicgenre[action.payload];
    },
  },
});

export const { getCategories } = categorySlice.actions;
export default categorySlice.reducer;
