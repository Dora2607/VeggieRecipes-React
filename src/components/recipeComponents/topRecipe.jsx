
import { Box, Tabs, Tab } from "@mui/material";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteRecipes,
  removeFavoriteRecipes,
} from "../../stores/favoriteRecipesSlice";

function TopRecipe({ recipe }) {
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector((state) => state.favoriteRecipes.recipes);
  const isFavorite = favoriteRecipes.some(
    (favoriteRecipe) => favoriteRecipe.id === recipe.id
  );
  const handleAddToFavorites = () => {
    if (isFavorite) {
      dispatch(removeFavoriteRecipes(recipe));
    } else {
      dispatch(addFavoriteRecipes(recipe));
    }
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: { xs: 320, sm: "100%" },
          bgcolor: "background.paper",
          overflowX: { xs: "auto", sm: "visible" },
          whiteSpace: { xs: "nowrap", sm: "normal" },
          p: 2,
          paddingBottom: 3,
        }}
      >
        <Tabs
          value={false}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable tabs "
        >
          {recipe.diets.map((diet, index) => (
            <Tab key={index} label={diet} disabled={true} sx={{
              "&.Mui-disabled": {
                color: "primary.main", 
              },
            }}/>
          ))}
        </Tabs>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "space-around",
          },
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          alignItems: "center",
          gap: {
            xs: 2,
            sm: 4,
            md: 6,
            lg: 10,
          },
          marginBottom: { xs: 2, sm: 6 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: {
              xs: "175px",
              sm: "200px",
              md: "225px",
              lg: "250px",
            },
            height: {
              xs: "175px",
              sm: "200px",
              md: "225px",
              lg: "250px",
            },
            backgroundImage: `url(${recipe.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
            boxShadow: "10px 12px 32px rgba(0, 0, 0, 0.4)",
            marginTop: { xs: 2, sm: 3, lg: 4 },
            marginBottom: { xs: 5, sm: 0 },
          }}
        />
        <Box
          sx={{
            textAlign: {
              xs: "center",
              sm: "left",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mt: 2,
              mb: 2,
              color: "primary.main",
              maxWidth: "500px",
            }}
          >
            {recipe.title}
          </Typography>
          <Button
            variant="outlined"
            startIcon={<FavoriteIcon />}
            onClick={handleAddToFavorites}
            color={isFavorite ? "error" : "default"}
          >
            {isFavorite ? "Saved" : "Save"}
          </Button>
          <Typography
            variant="subtitle2"
            sx={{ mt: 2, mb: 2, color: "text.primary" }}
          >
            {`Ready in: ${recipe.readyInMinutes} minutes`}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ mt: 2, mb: 2, color: "text.primary" }}
          >
            {`Servings: ${recipe.servings}`}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ mt: 2, mb: 2, color: "text.primary" }}
          >
            {recipe.occasions.length > 0
              ? `Occasions: ${recipe.occasions.join(", ")}`
              : "Occasions: all seasons"}
          </Typography>
          <Stack
            direction="row"
            spacing={0}
            sx={{
              maxWidth: "500px",
              justifyContent: {
                xs: "center",
                sm: "flex-start",
              },
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {recipe.dishTypes.map((type, index) => (
              <Chip
                label={type}
                key={index}
                color="primary"
                variant="outlined"
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default TopRecipe;
