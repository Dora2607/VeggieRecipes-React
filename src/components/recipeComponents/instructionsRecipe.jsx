import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function InstructionsRecipe({ instructions }) {
  const steps =
    instructions && instructions[0]?.steps ? instructions[0].steps : [];
  const theme = useTheme();

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        boxShadow: "-5px 0 15px rgba(0, 0, 0, 0.1)",
        border: "2px solid",
        borderColor: theme.palette.secondary.main,
        borderTopRightRadius: "1rem",
        borderBottomRightRadius: "1rem",
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
        Instructions:
      </Typography>

      <List
        sx={{
          paddingLeft: "1.5rem",
          flexGrow: 1,
        }}
      >
        {steps.length > 0 ? (
          steps.map((instruction, index) => (
            <ListItem key={index} sx={{ paddingBottom: "1rem" }}>
              <ListItemText
                primary={`Step ${index + 1}: ${instruction.step}`}
              />
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No instructions available" />
          </ListItem>
        )}
      </List>
    </Box>
  );
}

export default InstructionsRecipe;
