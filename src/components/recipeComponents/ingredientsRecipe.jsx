import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function IngredientsRecipe({ ingredients }) {
  const theme = useTheme();
  const safeIngredients = Array.isArray(ingredients) ? ingredients : [];

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        //backgroundColor: theme.palette.background.section,
        boxShadow: "5px 0 15px rgba(0, 0, 0, 0.1)",
        border: "2px solid",
        borderColor: theme.palette.secondary.main,
        borderTopLeftRadius: "1rem",
        borderBottomLeftRadius: "1rem",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: "2rem",
          color: theme.palette.primary.main,
          borderBottom:"2px solid",
          padding:"1rem"

        }}
      >
        Ingredients:
      </Typography>
      <List
        sx={{
          paddingLeft: "1.5rem",
          flexGrow: 1,
        }}
      >
        {safeIngredients.length > 0 ? (
          safeIngredients.map((ingredient, index) => (
            <ListItem key={index} sx={{ paddingBottom: "1rem" }}>
              <ListItemText primary={`• ${ingredient.original}`} />
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No ingredients available" />
          </ListItem>
        )}
      </List>
    </Box>
  );
}

export default IngredientsRecipe;
