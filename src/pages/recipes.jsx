import { Outlet } from "react-router";
import { Box } from "@mui/material";

function Recipes() {
  return (
    <Box className="pageContainer">
      <Outlet/>
    </Box>
  );
}

export default Recipes;
