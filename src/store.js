import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./slice/likeSlice";

export const store = configureStore({
  reducer: {
    likes: likeReducer,
  },
});
