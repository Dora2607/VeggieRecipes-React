import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRecipe } from "../services/apiServices";

export const fetchRecipeThunk = createAsyncThunk(
  "recipes/fetchRecipe",
  async (id) => {
    const data = await fetchRecipe(id);
    return data;
  }
);

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipe: {},
    status: "idle",
    error: null,
  },
  reducers: {
    getRecipe(state, action) {
      state.recipe = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipeThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipe = action.payload;
        state.error = action.payload.error ? action.payload.error : null;
      })
      .addCase(fetchRecipeThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const recipeReducer = recipeSlice.reducer;

export const { getRecipe } = recipeSlice.actions;
