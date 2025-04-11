import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";


function InstructionsRecipe({ instructions }) {
  const steps = instructions?.[0].steps || [];
  const theme = useTheme();

  return (
    <Box
      sx={{
        flex: 1, 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.section,
        boxShadow: "-5px 0 15px rgba(0, 0, 0, 0.1)",
        borderLeft: "2px solid",
        borderTopRightRadius: "5rem",
        borderBottomRightRadius: "5rem",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: "2rem",
        }}
      >
        Instructions:
      </Typography>
      <List
        sx={{
          paddingLeft: "1.5rem",
          flexGrow: 1, 
        }}
      >
        {steps.map((instruction, index) => (
          <ListItem key={index} sx={{ paddingBottom: "1rem" }}>
            <ListItemText primary={`Step ${index + 1}: ${instruction.step}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default InstructionsRecipe;
