import { Outlet } from "react-router";
import SearchAppBar from "../components/searchAppBar";
import Footer from "../components/footer";
import { Box } from "@mui/material";

export default function RootLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <SearchAppBar />
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
