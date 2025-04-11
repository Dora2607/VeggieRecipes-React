import { Toolbar, IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SearchBar from "./searchBar";
import Logo from "./logo";

function AppBarContent({ toggleDrawer, handleThemeToggle, mode }) {
  return (
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Logo sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }} />
      
      <SearchBar></SearchBar>

      {/* Theme Toggle */}
      <IconButton
        size="large"
        color="inherit"
        sx={{ marginLeft: "2.5rem" }}
        onClick={handleThemeToggle}
      >
        {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Toolbar>
  );
}
export default AppBarContent;
