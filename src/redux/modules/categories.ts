import type { Reducer } from "redux";
import { createSlice } from "@reduxjs/toolkit";

type gengre = "감성" | "드라이브" | "공부" | "운동" | "기분전환";

const musicgenre = {
  감성: ["RNB힙합", "인디음악", "뉴에이지", "로파이", "발라드"],
  드라이브: ["외국힙합", "시티팝", "아이돌댄스곡", "디스코펑크"],
  공부: ["뉴에이지", "로파이"],
  운동: ["외국힙합", "아이돌댄스곡", "시티팝"],
  기분전환: ["아이돌댄스곡", "시티팝", "외국힙합"],
};

const initialState: String[] = [];

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories: (state, action) => musicgenre[action.payload as gengre],
  },
});

export const { getCategories } = categorySlice.actions;
export default categorySlice.reducer;
