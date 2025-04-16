import React, { useState } from "react";

import typeRecipes from "../../data/typeRecipes";
import diets from "../../data/diet";
import { Box, Tabs, Tab, Button, Menu, MenuItem } from "@mui/material";


function CardsTabs({ diet, type, onTypeChange, onDietChange }) {
  const [anchorEl, setAnchorEl] = useState(null);
 
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null); 
  };

  const handleDietChange = (selectedDiet) => {
    selectedDiet = selectedDiet.toLowerCase()
    console.log(selectedDiet)
    onDietChange(selectedDiet);
    handleMenuClose();
  };

  const selectedTypeIndex = typeRecipes.includes(type)
    ? typeRecipes.indexOf(type)
    : 0;

  const handleTypeChange = (event, newValue) => {
    const selectedType = typeRecipes[newValue];
    onTypeChange(selectedType);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1rem",
      }}
    >

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
      <Box>
        <Button variant="contained" onClick={handleMenuOpen} sx={{marginLeft:"1.5rem"}}>
          {diet.charAt(0).toUpperCase() + diet.slice(1)}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {diets.map((dietOption, index) => (
            <MenuItem key={index} onClick={() => handleDietChange(dietOption)}>
              {dietOption.charAt(0).toUpperCase() + dietOption.slice(1)}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
}

export default CardsTabs;
