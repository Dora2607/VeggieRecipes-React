import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="pageContainer"
    >
      <Typography color="primary.main" gutterBottom variant="h3">
        404: Page Not Found
      </Typography>
      <Typography gutterBottom variant="h6" sx={{ paddingBottom: "3rem" }}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Go to Homepage
      </Button>
    </Box>
  );
}
export default NotFound;
