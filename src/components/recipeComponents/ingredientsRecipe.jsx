import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";


function IngredientsRecipe({ ingredients }) {
  const theme = useTheme();
  return (
    <Box
    sx={{
      flex: 1, 
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: theme.palette.background.section,
      boxShadow: "5px 0 15px rgba(0, 0, 0, 0.1)",
      borderRight: "2px solid",
      borderTopLeftRadius: "5rem",
      borderBottomLeftRadius: "5rem",
      padding: "2rem",
    }}
  >
    <Typography
      variant="h4"
      sx={{
        marginBottom: "2rem",
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
      {ingredients.map((ingredient, index) => (
        <ListItem key={index} sx={{ paddingBottom: "1rem" }}>
          <ListItemText primary={`• ${ingredient.original}`} />
        </ListItem>
      ))}
    </List>
  </Box>
  );
}
export default IngredientsRecipe;
