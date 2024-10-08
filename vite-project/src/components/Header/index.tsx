import { Box } from "@mui/material";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderTop from "@/components/Header/components/HeaderTop";
import HeaderCenter from "@/components/Header/components/HeaderCenter";
import "./index.scss";

export const BlurContext = createContext();
export default function Header() {
  const location = useLocation();
  const keyPage = location.key;
  console.log("keypage", location);
  console.log("keypage", keyPage);
  const [hoverEnter, setHoverEnter] = useState(false);
  console.log("hoverEnter", hoverEnter);
  useEffect(() => {
    setHoverEnter(false);
  }, [keyPage]);

  const handleMouseEnter = (e) => {
    setHoverEnter(e);
  };
  const handleMouseLeave = (e) => {
    setHoverEnter(false);
  };
  const value = {
    hoverEnter,
    handleMouseEnter,
    handleMouseLeave,
  };
  return (
    <>
      <BlurContext.Provider value={value}>
        <Box className="header">
          <Box
            sx={{
              background: "rgba(0, 0, 0, 0.5)",
            }}
            onMouseEnter={() => handleMouseEnter("hoverSupport")}
            onMouseLeave={handleMouseLeave}
            className={`fill-background ${hoverEnter ? "active" : ""}`}
          />
          <HeaderTop />
          <HeaderCenter />
        </Box>
      </BlurContext.Provider>
    </>
  );
}
