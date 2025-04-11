import { createSlice } from "@reduxjs/toolkit";

export const favoriteRecipesSlice = createSlice({
  name: "favoriteRecipes",
  initialState: {
    recipes: [],
  },
  reducers: {
    addFavoriteRecipes(state, action) {
      state.recipes.push(action.payload);
    },
    removeFavoriteRecipes(state, action) {
      state.recipes = state.recipes.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    },
  },
});

export const favoriteRecipesReducer = favoriteRecipesSlice.reducer;

export const { addFavoriteRecipes, removeFavoriteRecipes } =
  favoriteRecipesSlice.actions;
