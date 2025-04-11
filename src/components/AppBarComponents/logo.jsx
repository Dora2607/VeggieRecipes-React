import { Box, Typography } from "@mui/material";
import bowl1 from'../../assets/bowl1.svg'

function Logo({ size = "md", sx }) {
  const dimensionsLogo =
    size === "xs"
      ? { width: "35px", height: "40px" }
      : { width: "70px", height: "60px" };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        ...sx,
      }}
    >
      <Box
        sx={{
          position: "relative",
          ...dimensionsLogo,
          backgroundImage: `url(${bowl1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginRight: 2,
        }}
      />
      <Box sx={{ fontWeight: "600" }}>
        <Typography variant="h6" sx={{ lineHeight: "1.1" }}>
          Veggie
        </Typography>
        <Typography variant="h6" sx={{ lineHeight: "1.1" }}>
          Recipes
        </Typography>
      </Box>
    </Box>
  );
}

export default Logo;
