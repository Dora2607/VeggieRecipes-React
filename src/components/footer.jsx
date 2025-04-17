import { Box, Typography, useTheme } from "@mui/material";

function Footer() {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        padding: "1rem",
        backgroundColor: theme.palette.background.section,

        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <Typography variant="body2">Created by <a href="https://mywebsite-a1aa4.web.app/">Addolorata Sparagno</a> </Typography>
      <Typography variant="body2">
        © {new Date().getFullYear()} Veggie Recipes. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
