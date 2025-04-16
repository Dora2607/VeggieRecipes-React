import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";

function CardsPagination({ uniqueRecipes, totalPages, page, onPageChange }) {
  if (uniqueRecipes.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <Pagination
        count={totalPages}
        page={page}
        onChange={onPageChange}
        color="primary"
      />
    </Box>
  );
}

export default CardsPagination;
