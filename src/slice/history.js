import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  history: [],
  historyStatus: null,
};

export const addToHistory = createAsyncThunk(
  "history/addToHistory",
  async ({video,token}) => {
    try {
      const res = await axios.post(
        "/api/user/history",
        { video },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return res.data.history;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeFromHistory = createAsyncThunk(
  "history/removeFromHistory",
  async ({videoId,token}) => {
    try {
      const res = await axios.delete(`/api/user/history/${videoId}`, {
        headers: {
          authorization: token,
        },
      });
      return res.data.history;
    } catch (error) {
      console.log(error);
    }
  }
);

export const clearHistory = createAsyncThunk(
  "history/clearHistory",
  async (token) => {
    try {
      const res = await axios.delete(`/api/user/history/all`, {
        headers: {
          authorization: token,
        },
      });
      return res.data.history;
    } catch (error) {
      console.log(error);
    }
  }
);

const historySlice = createSlice({
  name: "history",
  initialState,
  extraReducers: {
    [addToHistory.pending]: (state) => {
      state.historyStatus = "loading";
    },
    [addToHistory.fulfilled]: (state, action) => {
      state.history = action.payload;
      state.historyStatus = "success";
    },
    [addToHistory.rejected]: (state) => {
      state.historyStatus = "failed";
    },

    [removeFromHistory.pending]: (state) => {
      state.historyStatus = "loading";
    },
    [removeFromHistory.fulfilled]: (state, action) => {
      state.history = action.payload;
      state.historyStatus = "success";
    },
    [removeFromHistory.rejected]: (state) => {
      state.historyStatus = "failed";
    },

    [clearHistory.pending]: (state) => {
      state.historyStatus = "loading";
    },
    [clearHistory.fulfilled]: (state, action) => {
      state.history = action.payload;
      state.historyStatus = "success";
    },
    [clearHistory.rejected]: (state) => {
      state.historyStatus = "failed";
    },
  },
});

export default historySlice.reducer;
