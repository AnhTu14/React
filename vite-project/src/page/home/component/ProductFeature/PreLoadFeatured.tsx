import { Box } from "@mui/material";
import React from "react";
import "./preloadFeat.scss";

const PreLoadFeatured = () => {
  return (
    <Box className="preload-feat">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Box>
  );
};

export default PreLoadFeatured;
