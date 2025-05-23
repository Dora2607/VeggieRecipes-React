import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;

export const { setQuery } = searchSlice.actions;
