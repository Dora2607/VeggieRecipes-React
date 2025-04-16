import { Typography } from "@mui/material";

function CardsHeader({ diet, type, query }) {
  const formatWord = (word) => {
    return word
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join("-");
  };
  return (
    <Typography
      gutterBottom
      variant="h4"
      component="div"
      color="primary.main"
      sx={{
        marginTop: "2rem",
        marginBottom: "2rem",
        paddingLeft: {
          md: "2rem",
        },
        textAlign: {
          xs: "center",
          sm: "left",
        },
      }}
    >
      {diet === undefined ? "Vegetarian" : formatWord(diet)} -{" "}
      {!type ? "All Recipes" : formatWord(type)}
      {query && ` - Results for "${query}"`}
    </Typography>
  );
}

export default CardsHeader;
