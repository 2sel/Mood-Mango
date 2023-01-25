import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../config/configStore";
import { RootState } from "../config/configStore";
import { playlistApi } from "../../api/apihttp";
import { videoApi, DataFilter } from "../../api/apihttp";

interface datatype {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  displaytoggle: boolean;
}

export const getPlayerMusic = createAsyncThunk(
  "musics/getMusic",
  async (payload: string, thunkAPI) => {
    try {
      let finaldata = [];
      const data = await axios.get(playlistApi(payload));
      for (let listvideodata of data.data.items) {
        const videoid = listvideodata.contentDetails.videoId;
        const videodata = await axios.get(videoApi(videoid));
        finaldata.push(videodata.data.items[0]);
      }
      return thunkAPI.fulfillWithValue(DataFilter(finaldata));
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  musicnum: 0,
  musicdata: "",
  playerdisplay: false,
  isPlay: false,
  isLoading: false,
};

const todosSlice = createSlice({
  name: "musicplayer",
  initialState,
  reducers: {
    PlayerToggle: (state, action) => {
      state.playerdisplay = action.payload;
    },
    getMusicNum: (state, action) => {
      state.musicnum = action.payload;
    },
    togglePlay: (state, action) => {
      state.isPlay = action.payload;
    },
  },
  extraReducers: (builder) => {
    // getTodo
    builder.addCase(getPlayerMusic.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getPlayerMusic.fulfilled, (state: any, action) => {
      state.isLoading = false;
      state.musics = action.payload;
    });
    builder.addCase(getPlayerMusic.rejected, (state, action) => {
      state.isLoading = false;
      //   state.error = action.payload;
    });
  },
});

export const { PlayerToggle, getMusicNum, togglePlay } = todosSlice.actions;
export default todosSlice.reducer;
