import { useNavigate } from "react-router";
import { Box, Button, Typography } from "@mui/material";

function Error({ errorMessage }) {
  const navigate = useNavigate();
  return (
    <Box
      className="pageContainer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography color="primary.main" gutterBottom variant="h3">
        Something went wrong.
      </Typography>
      <Typography gutterBottom variant="h6" sx={{ paddingBottom: "3rem" }}>
        {errorMessage || "Unknown error occurred."}
      </Typography>

      <Button variant="contained" onClick={() => navigate(-1)}>
        Go back
      </Button>
    </Box>
  );
}

export default Error;
