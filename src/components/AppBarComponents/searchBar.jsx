import { Box, InputBase, useTheme, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { setQuery } from "../../stores/searchSlice";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";

function SearchBar() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(inputValue));
    if (
      location.pathname === "/" ||
      location.pathname === "/favorite-recipes"
    ) {
      navigate(`/recipes/vegetarian`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSearchSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: (theme) => theme.shape.borderRadius,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        marginLeft: 1,
        padding: (theme) => theme.spacing(0.25),
        width: { xs: "100%", sm: "auto" },
      }}
    >
      <InputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={inputValue}
        onChange={handleInputChange}
        sx={{
          flex: 1,
          color: "inherit",
          paddingLeft: (theme) => theme.spacing(2),
          transition: (theme) => theme.transitions.create("width"),
          "& .MuiInputBase-input": {
            padding: (theme) => theme.spacing(1),
            transition: (theme) => theme.transitions.create("width"),
            [theme.breakpoints.up("sm")]: {
              width: "16ch",
              "&:focus": {
                width: "24ch",
              },
            },
          },
        }}
      />

      <IconButton
        type="submit"
        sx={{
          marginLeft: (theme) => theme.spacing(1),
          color: "inherit",
        }}
        size="small"
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
}

export default SearchBar;
