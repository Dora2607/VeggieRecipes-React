import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useSelector } from "react-redux";
import categories from "../../data/categoriesData";

function HomeSection() {

  const mode = useSelector((state) => state.theme.mode);
  
  return (
    <>
      <Box
        sx={{
          color: "text.primary",
          textAlign: {
            xs: "center",
            sm: "left",
          },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "primary.main", paddingTop: "3.5rem" }}
        >
          What Will You Discover?
        </Typography>
        <Typography variant="body1" sx={{ mt: "2rem", mb: "1rem" }}>
          Explore delicious recipes tailored to your diet. Search by ingredients
          or dish type to find exactly what you need!
        </Typography>
        <Typography variant="body1" sx={{ mb: "4rem" }}>
          With vibrant fruits, wholesome grains, and nutrient-rich vegetables at
          the heart of every meal, the path to balanced living has never been
          more rewarding.
        </Typography>
        {/* Diet Categories */}
        <Box
          sx={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            marginTop: "2rem",
            backgroundColor: mode === "light" ? "#FFFFFF" : "none",
            backgroundImage:
              mode === "light"
                ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg fill-opacity='0.94'%3E%3Ccircle fill='%23FFFFFF' cx='50' cy='0' r='50'/%3E%3Cg fill='%23fffdf5' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23fffbeb' cx='50' cy='100' r='50'/%3E%3Cg fill='%23fff8e0' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23fff6d6' cx='50' cy='200' r='50'/%3E%3Cg fill='%23fff4cc' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23fff2c2' cx='50' cy='300' r='50'/%3E%3Cg fill='%23fff0b8' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ffedae' cx='50' cy='400' r='50'/%3E%3Cg fill='%23ffeba3' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ffe999' cx='50' cy='500' r='50'/%3E%3Cg fill='%23ffe78f' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ffe584' cx='50' cy='600' r='50'/%3E%3Cg fill='%23ffe379' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ffe16e' cx='50' cy='700' r='50'/%3E%3Cg fill='%23ffdf63' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ffdd57' cx='50' cy='800' r='50'/%3E%3Cg fill='%23ffdb4a' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ffd93c' cx='50' cy='900' r='50'/%3E%3Cg fill='%23ffd72b' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23FED511' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E")`
                : `none`,
            
                backgroundAttachment: "fixed",
            backgroundSize: "contain",
            border:"5px solid #fed511"  ,
            paddingTop: "4rem",
            paddingBottom: "4rem",
          }}
        >
          {categories.map((category) => (
            <Box
              key={category.id}
              sx={{
                p: {
                  xs: "1.5rem 1rem",
                  md: "1rem 3rem",
                  lg: "1.5rem 4rem",
                },
                display: "flex",
                justifyContent:
                  category.id % 2 === 0 ? "flex-start" : "flex-end",
                marginLeft: {
                  xs: 0,
                  sm: category.id % 2 === 0 ? "3rem" : 0,
                  md: category.id % 2 === 0 ? "5rem" : 0,
                },
                marginRight: {
                  xs: 0,
                  sm: category.id % 2 === 0 ? 0 : "3rem",
                  md: category.id % 2 === 0 ? 0 : "5rem",
                },
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  maxWidth: {
                    xs: "300px",
                    md: "400px",
                    lg: "450px",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardMedia
                  component="img"
                  image={category.image}
                  alt={category.name}
                  sx={{ height: "100%" }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    gutterBottom
                    sx={{
                      color: "primary.main",
                      paddingTop: "1rem",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    {category.name}
                  </Typography>
                  <Typography variant="body2">
                    {category.description}
                  </Typography>
                  <Typography variant="body2" component="div" sx={{ mt: 2 }}>
                    <strong>Benefits:</strong>
                    <ul>
                      {category.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default HomeSection;
