import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
      state.watchLaterStatus = "loading";
    },
    [addToWatchLater.fulfilled]: (state, action) => {
      state.watchLater = action.payload;
      state.watchLaterStatus = "success";
    },
    [addToWatchLater.rejected]: (state) => {
      state.watchLaterStatus = "failed";
    },

    [removeFromWatchLater.pending]: (state) => {
      state.watchLaterStatus = "loading";
    },
    [removeFromWatchLater.fulfilled]: (state, action) => {
      state.watchLater = action.payload;
      state.watchLaterStatus = "success";
    },
    [removeFromWatchLater.rejected]: (state) => {
      state.watchLaterStatus = "failed";
    },
  },
});

export default watchLaterSlice.reducer;
