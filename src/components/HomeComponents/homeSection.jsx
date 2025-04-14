import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import categories from "../../data/categoriesData";
import { useNavigate } from "react-router";

function HomeSection() {
  const navigate = useNavigate();

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
        <Typography variant="body1" sx={{ mb: "1.5rem" }}>
          With vibrant fruits, wholesome grains, and nutrient-rich vegetables at
          the heart of every meal, the path to balanced living has never been
          more rewarding.
        </Typography>

        <Box
          sx={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            marginTop: "1rem",
            paddingTop: "1rem",
            paddingBottom: "4rem",
          }}
        >
          {categories.map((category) => (
            <Box
              key={category.id}
              sx={{
                display: "flex",
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: category.id % 2 === 0 ? "row" : "row-reverse",
                  },
                  gap: "1rem",
                  marginBottom: {
                    xs: "1.5rem",
                    md: "2rem",
                  },
                  boxShadow: 3,
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  image={category.image}
                  alt={category.name}
                  sx={{
                    width: { xs: "100%", md: "60%" },
                    height: { xs: "200px", md: "auto" },
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <Typography
                    variant="h5"
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

                  <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
                    <strong>Benefits:</strong>
                  </Typography>

                  <List sx={{pb:2}}>
                    {category.benefits.map((benefit, index) => (
                      <ListItem key={index} sx={{ paddingLeft: 1.5, pt:0,pb:0,gap: "0.5rem" }}>
                      <CircleIcon sx={{ fontSize: "0.5rem", color: "black" }} />
                        <ListItemText primary={`${benefit}`} />
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      width: "90%",
                      alignSelf: "center",
                    }}
                    onClick={() =>
                      navigate(`/recipes/${category.name.toLowerCase()}`)
                    }
                  >
                    Go To The Page
                  </Button>
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
