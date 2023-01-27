import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

import musics from "../modules/musics";
import musicplayer from "../modules/musicplayer";
import categories from "../modules/categories";
import Navbar from "../modules/Navbar";

const store = configureStore({
  reducer: { musics, musicplayer, categories, Navbar },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
