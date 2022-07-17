import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  likes: [],
  likeStatus: null,
};

export const addToLikes = createAsyncThunk(
  "likes/addToLikes",
  async ({ video, token }) => {
    try {
      const response = await axios.post(
        "/api/user/likes",
        { video },
        {
          headers: { authorization: token },
        }
      );
      return response.data.likes;
    } catch (e) {
      console.log(e);
    }
  }
);

export const removeFromLiked = createAsyncThunk(
  "likes/removeFromLiked",
  async ({ videoId, token }) => {
    try {
      const response = await axios.delete(`/api/user/likes/${videoId}`, {
        headers: { authorization: token },
      });
      return response.data.likes;
    } catch (e) {
      console.log(e);
    }
  }
);

export const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {},
  extraReducers: {
    [addToLikes.pending]: (state) => {
      state.likeStatus = "loading";
    },
    [addToLikes.fulfilled]: (state, action) => {
      state.likes = action.payload;
      state.likeStatus = "success";
    },
    [addToLikes.rejected]: (state) => {
      state.likeStatus = "failed";
    },
    [removeFromLiked.pending]: (state) => {
      state.likeStatus = "loading";
    },
    [removeFromLiked.fulfilled]: (state, action) => {
      state.likes = action.payload;
      state.likeStatus = "success";
    },
    [removeFromLiked.rejected]: (state) => {
      state.likeStatus = "failed";
    },
  },
});

export default likeSlice.reducer;
