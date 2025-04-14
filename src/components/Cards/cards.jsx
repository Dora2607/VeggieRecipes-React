import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import CardItem from "./cardItem";
import { Box, Tabs, Tab } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import {
  fetchRecipesThunk,
  setDiet,
  setPage,
  setType,
} from "../../stores/recipesSlice";
import Pagination from "@mui/material/Pagination";
import Error from "../error";
import typeRecipes from "../../data/typeRecipes";


function Cards() {
  const dispatch = useDispatch();
  const { diet } = useParams();
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

  const totalPages = totalResults
    ? Math.min(Math.ceil(totalResults / number), 90)
    : 5;

  const handlePageChange = (event, value) => {
    if (value <= totalPages) {
      dispatch(setPage(value));
      dispatch(fetchRecipesThunk({ diet, type, query, page: value, number }));
    }
  };

  const selectedTypeIndex = typeRecipes.includes(type)
    ? typeRecipes.indexOf(type)
    : 0;

  const handleTypeChange = (event, newValue) => {
    const selectedType = typeRecipes[newValue];
    dispatch(setType(selectedType));
    dispatch(
      fetchRecipesThunk({ diet, type: selectedType, query, page: 1, number })
    );
  };

  const uniqueRecipes = recipes.reduce((arr, recipe) => {
    if (!arr.some((r) => r.id === recipe.id)) {
      arr.push(recipe);
    }
    return arr;
  }, []);

  const formatWord = (word) => {
    return word
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join("-");
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
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            color="primary.main"
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
            {diet === undefined ? "Vegetarian" : formatWord(diet)} -{" "}
            {!type ? "All Recipes" : formatWord(type)}
            {query && ` - Results for "${query}"`}
          </Typography>
          <>
            <Box>
              <Tabs
                value={selectedTypeIndex}
                onChange={handleTypeChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable tabs"
              >
                {typeRecipes.map((type, index) => (
                  <Tab key={index} label={type} />
                ))}
              </Tabs>
            </Box>
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
                <Box
                >
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
          </>
          {uniqueRecipes.length > 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          ) : (
            <></>
          )}
        </Box>
      )}
    </>
  );
}
export default Cards;
