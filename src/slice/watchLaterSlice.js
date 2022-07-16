import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let encodedToken = "";

const initialState = {
  watchLater: [],
  watchLaterStatus: null,
};

export const addToWatchLater = createAsyncThunk(
  "watchLater/addToWatchLater",
  async ({video,token}) => {
    try {
      const res = await axios.post(
        "/api/user/watchlater",
        { video },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return res.data.watchlater;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeFromWatchLater = createAsyncThunk(
  "watchLater/removeFromWatchLater",
  async ({videoId,token}) => {
    try {
      const res = await axios.delete(`/api/user/watchlater/${videoId}`, {
        headers: {
          authorization: token,
        },
      });
      return res.data.watchlater;
    } catch (error) {
      console.log(error);
    }
  }
);

const watchLaterSlice = createSlice({
  name: "watchLater",
  initialState,
  extraReducers: {
    [addToWatchLater.pending]: (state) => {
      state.status = "loading";
    },
    [addToWatchLater.fulfilled]: (state, action) => {
      state.watchLater = action.payload;
      state.status = "success";
    },
    [addToWatchLater.rejected]: (state) => {
      state.status = "failed";
    },

    [removeFromWatchLater.pending]: (state) => {
      state.status = "loading";
    },
    [removeFromWatchLater.fulfilled]: (state, action) => {
      state.watchLater = action.payload;
      state.status = "success";
    },
    [removeFromWatchLater.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default watchLaterSlice.reducer;
