import React from "react";
import { Box, Typography } from "@mui/material";
import image1 from "../../assets/images/image1.jpg"

function HeroBanner() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          sm: "row",
        },
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "5rem",
        marginBottom: "5rem",
      }}
    >
      <Box
        sx={{
          textAlign: {
            xs: "center",
            sm: "left",
          },
          maxWidth: {
            xs: "300px",
            sm: "400px",
            md: "500px",
            lg: "600px",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{ mt: 3, mb: 4, color: "primary.main" }}
        >
          A Journey to Healthy and Sustainable Living
        </Typography>
        <Typography variant="h6" sx={{ mt: 3, mb: 4 }}>
          Choosing a plant-based lifestyle is more than just a dietary
          choice, it's a commitment to better health, sustainability, and
          compassion. Whether you prefer vegetarianism, lacto-vegetarianism,
          ovo-vegetarianism, or veganism, each offers unique ways to reduce your
          carbon footprint, boost your well-being, and embrace mindful eating.
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "275px",
          height: "275px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            bottom: {
              xs: "0rem",
              sm: "35px",
              md: "40px",
              lg: "50px",
            },
            right: {
              xs: "0px",
              sm: "35px",
              md: "40px",
              lg: "50px",
            },
            width: "275px",
            height: "275px",
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
            boxShadow: "10px 12px 32px rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: {
              sm: "225px",
              md: "300px",
            },
            height: { sm: "225px", md: "300px" },
            backgroundColor: "secondary.main",
            borderTopLeftRadius: "50%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 0,
          }}
          display={{ xs: "none", sm: "block" }}
        />
      </Box>
    </Box>
  );
}

export default HeroBanner;
