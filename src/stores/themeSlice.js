import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "Theme",
  initialState: {
    mode: "light",
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const themeSliceReducer = themeSlice.reducer;

export const { toggleTheme } = themeSlice.actions;
