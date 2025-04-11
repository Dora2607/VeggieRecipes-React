import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        padding: "1rem",
        backgroundColor: "primary.main",
        color: "black",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <Typography variant="body2">Created by Addolorata Sparagno</Typography>
      <Typography variant="body2">
        © {new Date().getFullYear()} Veggie Recipes. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
