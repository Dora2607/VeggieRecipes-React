import { useSelector } from "react-redux";
import CardItem from "../components/Cards/cardItem";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

function FavoriteRecipes() {
  const favoriteRecipes = useSelector((state) => state.favoriteRecipes.recipes);

  return (
    <div className="pageContainer">
      <Typography
        color="primary.main"
        gutterBottom
        variant="h3"
        component="div"
      >
        Favorite Recipes
      </Typography>
      <Typography variant="h6" sx={{ mt: 3, mb: 4 }}>
        Your favorite recipes are more than just meals, they’re stories of
        flavor, tradition, and joy. Discover personalized dishes that bring
        comfort to your table, inspire creativity in the kitchen, and celebrate
        the art of good food. Whether it’s a hearty vegan stew, a classic
        vegetarian pasta, or a sweet lacto-vegetarian dessert, these recipes
        reflect your taste and lifestyle.
      </Typography>


      {favoriteRecipes.length === 0 ? (
        <p>No favorite recipes added yet.</p>
      ) : (
        <Box sx={{ flexGrow: 1, my: 5 }}>
          <Grid container spacing={{ xs: 3, md: 4, lg: 5 }}>
            {favoriteRecipes.map((recipe) => (
              <Grid key={recipe.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <CardItem recipe={recipe} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
}

export default FavoriteRecipes;
