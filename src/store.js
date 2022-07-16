import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./slice/likeSlice";
import watchLaterReducer from "./slice/watchLaterSlice";

export const store = configureStore({
  reducer: {
    likes: likeReducer,
    watchLater: watchLaterReducer,
  },
});
