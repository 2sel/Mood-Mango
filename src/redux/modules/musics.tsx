import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../config/configStore";
import { RootState } from "../config/configStore";
import { playlistApi } from "../../api/apihttp";
import { videoApi, DataFilter, playlisturl } from "../../api/apihttp";
interface datatype {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  displaytoggle: boolean;
}

export const getMusic = createAsyncThunk(
  "musics/getMusic",
  async (payload: any, thunkAPI) => {
    try {
      let finaldata = [];

      const data = await axios.get(playlistApi(payload.playlistId));
      for (let listvideodata of data.data.items) {
        const videoid = listvideodata.contentDetails.videoId;
        const videodata = await axios.get(videoApi(videoid));
        finaldata.push(videodata.data.items[0]);
      }
      let filteredData = DataFilter(finaldata);

      return thunkAPI.fulfillWithValue({
        filteredData,
        location: payload.location,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState: any = {
  musics: [],
  popular: [],
  뉴에이지: [],
  발라드: [],
  아이돌댄스곡: [],
  시티팝: [],
  인디음악: [],
  RNB힙합: [],
  외국힙합: [],
  디스코펑크: [],
  재즈: [],
  로파이: [],

  isLoading: false,

  //   error: null,
};

const todosSlice = createSlice({
  name: "musics",
  initialState,
  reducers: {
    getPlaylist: (state, action) => {
      state.musics = action.payload;
    },
    requestPlaylist: (state, action) => {
      state.musics = state[action.payload];
    },
    resetPlaylist: (state) => {
      state.musics = [];
    },
  },
  extraReducers: (builder) => {
    // getTodo
    builder.addCase(getMusic.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMusic.fulfilled, (state, action) => {
      state.isLoading = false;
      let location = action.payload.location;
      state[location] = action.payload.filteredData;
    });
    builder.addCase(getMusic.rejected, (state, action) => {
      state.isLoading = false;
      //   state.error = action.payload;
    });
  },
});

export const { getPlaylist, resetPlaylist, requestPlaylist } =
  todosSlice.actions;
export default todosSlice.reducer;
