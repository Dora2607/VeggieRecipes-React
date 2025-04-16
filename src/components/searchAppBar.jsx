import { useState } from "react";
import { AppBar, Box } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../stores/themeSlice";
import DrawerMenu from "./AppBarComponents/drawerMenu";
import AppBarContent from "./AppBarComponents/toolbar";
import diets from "../data/diet";


export default function SearchAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode);

  const toggleDrawer = (newOpen) => () => setDrawerOpen(newOpen);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleDietClick = (diet) => {
    navigate(`/recipes/${diet.toLowerCase()}`);
    setMenuOpen(false);
  };
  const handleThemeToggle = () => dispatch(toggleTheme());


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <AppBarContent
          toggleDrawer={toggleDrawer}
          handleThemeToggle={handleThemeToggle}
          mode={mode}
        />
      </AppBar>
      <DrawerMenu
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        handleDietClick={handleDietClick}
        diets={diets}
      />
    </Box>
  );
}
