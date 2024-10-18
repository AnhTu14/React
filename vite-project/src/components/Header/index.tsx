import { Box } from "@mui/material";
import { useEffect, useState, createContext } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderTop from "@/components/Header/components/HeaderTop";
import HeaderCenter from "@/components/Header/components/HeaderCenter";
import HeaderBot from "@/components/Header/components/HeaderBot";
import productApi from "@/api/productApi";
import { addCategory } from "@/page/product/productSlice";
import "./index.scss";

export const BlurContext = createContext();
export default function Header() {
  const location = useLocation();
  const keyPage = location.key;
  const dispatch = useDispatch();
  const [hoverEnter, setHoverEnter] = useState(false);
  useEffect(() => {
    setHoverEnter(false);
  }, [keyPage]);
  useEffect(() => {
    const fetchCategoryProduct = async () => {
      try {
        const response: any = await productApi.getCategory();
        if (response.success) {
          dispatch(addCategory(response.cat));
        }
        console.log("111", response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };

    fetchCategoryProduct();
  }, []);
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
          <HeaderBot />
        </Box>
      </BlurContext.Provider>
    </>
  );
}
