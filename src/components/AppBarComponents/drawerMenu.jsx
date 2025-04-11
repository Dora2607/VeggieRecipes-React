import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import Logo from "./logo";
import { NavLink } from "react-router";

function DrawerMenu({
  drawerOpen,
  toggleDrawer,
  toggleMenu,
  menuOpen,
  handleDietClick,
  diets,
}) {
  return (
    <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
      <Logo size="xs" sx={{ margin: 2 }} />
      <Divider />
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              "&:hover": {
                color: " rgb(163, 184, 106)",
              },
            }}
          >
            <ListItemButton onClick={toggleMenu}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary="Recipes" />
              {menuOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={menuOpen} timeout="auto" unmountOnExit>
            <List>
              {diets.map((diet) => (
                <ListItem
                  key={diet}
                  disablePadding
                  sx={{
                    "&:hover": {
                      color: " rgb(163, 184, 106)",
                    },
                  }}
                >
                  <ListItemButton
                    onClick={() => handleDietClick(diet)}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary={diet} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/favorite-recipes">
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Saved Recipes" />
          </ListItemButton>
        </ListItem>
      </Box>
    </Drawer>
  );
}

export default DrawerMenu;
