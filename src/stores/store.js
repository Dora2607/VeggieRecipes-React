import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "./recipesSlice";
import { themeSliceReducer } from "./themeSlice";
import { Favorite } from "@mui/icons-material";
import { favoriteRecipesReducer } from "./favoriteRecipesSlice";
import { recipeReducer } from "./recipeSlice";
import { searchReducer } from "./searchSlice";

export default configureStore({
  reducer: {
    recipes: recipesReducer,
    theme: themeSliceReducer,
    favoriteRecipes: favoriteRecipesReducer,
    recipe: recipeReducer,
    search: searchReducer,
  },
});
