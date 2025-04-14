import recipesTypeWithIcons from "../../data/recipesTypeWithIcons";
import React, { useState } from "react";
import {
  Box,
  ListItem,
  Avatar,
  Typography,
  IconButton,
  Collapse,
  useMediaQuery,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
function RecipesType() {
  const [expanded, setExpanded] = useState(false); // Stato per gestire l'espansione
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md")); // Controllo per piccoli schermi

  const handleToggle = () => {
    setExpanded(!expanded); // Alterna tra stato espanso e compresso
  };

  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column", // Organizzazione in colonna
        alignItems: "center",
      }}
    >
      {/* Mostra solo il Collapse su piccoli schermi */}
      {isSmallScreen ? (
        <>
          <Collapse in={expanded} collapsedSize={120} sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1.5rem",
              }}
            >
              {recipesTypeWithIcons.map((type, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    width: { xs: "80px", sm: "120px" },
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      backgroundColor: "primary.main",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <type.icon />
                  </Avatar>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {type.name}
                  </Typography>
                </ListItem>
              ))}
            </Box>
          </Collapse>

          <IconButton  color="secondary" onClick={handleToggle} sx={{ marginTop: "1rem" }}>
            {expanded ? <ExpandLessIcon size="large"/> : <ExpandMoreIcon size="large"/>}
          </IconButton>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {recipesTypeWithIcons.map((type, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: { xs: "80px", sm: "120px" },
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: "primary.main",
                  marginBottom: "0.5rem",
                }}
              >
                <type.icon />
              </Avatar>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {type.name}
              </Typography>
            </ListItem>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default RecipesType;
