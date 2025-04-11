import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRecipes } from "../services/apiServices.jsx";

export const fetchRecipesThunk = createAsyncThunk(
  "recipes/fetchRecipes",
  async (_, { getState }) => {
    const { recipes, search } = getState();
    const diet = recipes.diet;
    const type = recipes.type;
    const query = search.query;
    const page = recipes.page;
    const number = recipes.number;

    const maxOffset = 900;
    const offset = Math.min((page - 1) * number, maxOffset);

    const data = await fetchRecipes(diet, type, query, offset, number);
    return data;
  }
);

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    totalResults: 0,
    diet: "vegetarian",
    type: "",
    page: 1,
    number: 10,
    status: "idle",
    error: null,
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
      state.recipes = [];
      state.status = "loading";
    },
    setDiet(state, action) {
      if (state.diet !== action.payload) {
        state.diet = action.payload;
        state.page = 1;
        state.recipes = [];
      }
    },
    setType(state, action) {
      if (state.type !== action.payload) {
        state.type = action.payload;
        state.page = 1;
        state.recipes = [];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipesThunk.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.status = "error";
          state.error = action.payload.error;
        } else {
          state.status = "succeeded";
          state.recipes = action.payload.results;
          state.totalResults = action.payload.totalResults;
          state.error = null;
        }
      })
      .addCase(fetchRecipesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const recipesReducer = recipesSlice.reducer;

export const { setDiet, setPage, setType } = recipesSlice.actions;
