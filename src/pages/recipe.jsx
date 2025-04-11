import { useParams, useNavigate, Navigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRecipeThunk } from "../stores/recipeSlice";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import TopRecipe from "../components/recipeComponents/topRecipe";
import IngredientsRecipe from "../components/recipeComponents/ingredientsRecipe";
import InstructionsRecipe from "../components/recipeComponents/instructionsRecipe";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Error from "../components/error";


function Recipe() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { recipe, status, error } = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(fetchRecipeThunk(id));
  }, [id, dispatch]);

  return (
    <>
    {status === "loading" && (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    )}
    {status === "error" && <Error errorMessage={error}/>}
    <Box>
      <IconButton color="secondary" aria-label="go back" sx={
        {position: 'fixed',
          size:"large", 
          top:{
            xs: '4rem',
            sm: '5rem',
            
          },
          left:{
            xs: '0',
            sm: '0.5rem',
            md: '1rem'
            },
           }
      } onClick={()=> navigate(-1)}>
        <ArrowBackIosNewOutlinedIcon />
      </IconButton>
      <Box>
        {status === "succeeded" && (
          <Box sx={{
            flexGrow: 1, my: 7, 
          }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TopRecipe recipe={recipe}></TopRecipe>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                  alignItems: "stretch",
                  justifyContent: "space-between",
                  margin: "2rem",
                  padding: "2rem",
                  gap: "2rem",
                  maxWidth: "1100px"
                }}
              >
                <IngredientsRecipe ingredients={recipe.extendedIngredients}></IngredientsRecipe>
                <InstructionsRecipe instructions={recipe.analyzedInstructions}></InstructionsRecipe>

              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
    </>
  );
}

export default Recipe;
