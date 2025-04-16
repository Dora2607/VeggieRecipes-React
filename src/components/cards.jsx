import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import CardItem from "./Cards/cardItem";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import {
  fetchRecipesThunk,
  setDiet,
  setPage,
  setType,
} from "../stores/recipesSlice";
import Error from "./error";
import CardsHeader from "./Cards/cardsHeader";
import CardsTabs from "./Cards/cardsTabs";
import CardsPagination from "./Cards/cardsPagination";

function Cards() {
  const dispatch = useDispatch();
  const { diet } = useParams();
  const navigate = useNavigate();
  const { recipes, type, page, number, status, error, totalResults } =
    useSelector((state) => state.recipes);
  const query = useSelector((state) => state.search.query);

  useEffect(() => {
    if (diet !== undefined || diet !== "vegetarian") {
      dispatch(setDiet(diet));
    }
    if (type !== undefined || type !== "") {
      dispatch(setType(type));
    }

    dispatch(fetchRecipesThunk({ diet, type, query, page, number }));
  }, [diet, type, query, page, number, dispatch]);

  const uniqueRecipes = recipes.reduce((arr, recipe) => {
    if (!arr.some((r) => r.id === recipe.id)) {
      arr.push(recipe);
    }
    return arr;
  }, []);

  const handleTypeChange = (selectedType) => {
    dispatch(setType(selectedType));
    dispatch(
      fetchRecipesThunk({ diet, type: selectedType, query, page: 1, number })
    );
  };

  const totalPages = totalResults
    ? Math.min(Math.ceil(totalResults / number), 90)
    : 5;

  const handlePageChange = (event, value) => {
    if (value <= totalPages) {
      dispatch(setPage(value));
      dispatch(fetchRecipesThunk({ diet, type, query, page: value, number }));
    }
  };

  const handleDietChange = (selectedDiet) => {

    dispatch(setDiet(selectedDiet));
    navigate(`/recipes/${selectedDiet}`);
    dispatch(
      fetchRecipesThunk({ diet: selectedDiet, type, query, page: 1, number })
    );
  };

  return (
    <>
      {status === "loading" && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      {status === "error" && <Error errorMessage={error} />}
      {status === "succeeded" && (
        <Box>
          <CardsHeader diet={diet} type={type} query={query} />
          <CardsTabs
            diet={diet}
            type={type}
            onTypeChange={handleTypeChange}
            onDietChange={handleDietChange}
          />

          <Box sx={{ flexGrow: 1, my: 5 }}>
            {uniqueRecipes.length > 0 ? (
              <Grid container spacing={{ xs: 3, md: 4, lg: 5 }}>
                {uniqueRecipes.map((recipe) => (
                  <Grid key={recipe.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <CardItem recipe={recipe} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "2rem",
                    marginBottom: "2rem",
                    paddingLeft: {
                      md: "2rem",
                    },
                    textAlign: {
                      xs: "center",
                      sm: "left",
                    },
                  }}
                >
                  No results found.
                </Typography>
              </Box>
            )}
          </Box>

          <CardsPagination
            uniqueRecipes={uniqueRecipes}
            totalPages={totalPages}
            page={page}
            onPageChange={handlePageChange}
          />
        </Box>
      )}
    </>
  );
}
export default Cards;
