import "./App.css";
import Home from "./pages/home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import FavoriteRecipes from "./pages/favoriteRecipes";
import Recipe from "./pages/recipe";
import NotFound from "./pages/notFound";
import RootLayout from "./layout/rootLayout";
import Recipes from "./pages/recipes";
import { Provider } from "react-redux";
import store from "./stores/store";
import ThemeWrapper from "./components/themeWrapper.jsx";
import Cards from "./components/Cards/cards.jsx";
import Error from "./components/error.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/recipes" element={<Recipes />} errorElement={<Error />}>
        <Route path=":diet" element={<Cards />} />
        <Route path=":diet/:id" element={<Recipe />} />
        
      </Route>
      <Route path="/favorite-recipes" element={<FavoriteRecipes />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <RouterProvider router={router} />
      </ThemeWrapper>
    </Provider>
  );
}

export default App;
