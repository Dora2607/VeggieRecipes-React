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
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useNavigate } from "react-router";

function RecipesType() {
  const [expanded, setExpanded] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const theme = useTheme();
  const navigate = useNavigate();
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleTypesClick =(typeName)=>{
    navigate(`/recipes/vegetarian`, {state:{type:typeName}});
  }

  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid",
        borderRadius: "0.5rem",
        borderColor: "secondary.main",
        backgroundColor: theme.palette.background.section,
        boxShadow:
          "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
      }}
    >
      {isSmallScreen ? (
        <>
          <Collapse in={expanded} collapsedSize={150} sx={{ width: "100%" }}>
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
                  onClick={() => handleTypesClick(type.name)}
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
                      width: 60,
                      height: 60,
                      marginBottom: "0.5rem",
                      padding: "0.25rem",
                    }}
                  >
                    <img
                      src={type.icon}
                      alt={type.name}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Avatar>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                  </Typography>
                </ListItem>
              ))}
            </Box>
          </Collapse>

          <IconButton
            color="secondary"
            onClick={handleToggle}
            sx={{ marginTop: "1rem" }}
          >
            {expanded ? (
              <ExpandLessIcon size="large" />
            ) : (
              <ExpandMoreIcon size="large" />
            )}
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
              onClick={() => handleTypesClick(type.name)}
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
                  width: 50,
                  height: 50,
                  marginBottom: "0.5rem",
                  padding: "0.25rem",
                }}
              >
                <img
                  src={type.icon}
                  alt={type.name}
                  style={{ width: "100%", height: "100%" }}
                />
              </Avatar>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
              </Typography>
            </ListItem>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default RecipesType;
