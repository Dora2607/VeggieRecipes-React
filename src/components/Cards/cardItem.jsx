import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteRecipes,
  removeFavoriteRecipes,
} from "../../stores/favoriteRecipesSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams, Link } from "react-router";

function CardItem({ recipe }) {
  const dispatch = useDispatch();
  const { diet } = useParams();
  const formatParam = (diet) => {
    if (diet === undefined) {
      return "vegetarian";
    } else {
      return diet;
    }
  };

  //Formatto il titolo della card
  const maxTitleLength = 50;
  const truncatedTitle =
    recipe.title.length > maxTitleLength
      ? `${recipe.title.substring(0, maxTitleLength)}...`
      : recipe.title;

  // Mi occupo dell'icona favoriti
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
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "275px",
        justifyContent: "space-between",
        p: 1,
        maxWidth: "380px",
      }}
    >
      <CardContent
        sx={{ display: "flex", justifyContent: "space-between", padding: 1 }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ width: "175px" }}
        >
          {truncatedTitle}
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "120px",
            height: "175px",
            backgroundImage: `url(${recipe.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "5px",
          }}
        />
      </CardContent>
      <CardActions
        sx={{ justifyContent: "flex-start", alignItems: "space-between" }}
      >
        <Link size="small" to={`/recipes/${formatParam(diet)}/${recipe.id}`}>
          Learn More
        </Link>
        <IconButton
          aria-label="add to favorites"
          onClick={handleAddToFavorites}
          color={isFavorite ? "error" : "default"}
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CardItem;
