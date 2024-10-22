import { Box, CircularProgress } from "@mui/material";
import "@/components/Loading/styles.scss";

const LoadingPage = () => {
  return (
    <Box className="loading-page">
      <Box className="wrap-label">
        <Box className="wrap-ct">
          <CircularProgress />
        </Box>
      </Box>
    </Box>
  );
};

export default LoadingPage;
