import { Box, Grid, Link, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getBanenrHomePage } from "utils/category";
import CallIcon from "@mui/icons-material/Call";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import FeedIcon from "@mui/icons-material/Feed";
import SellIcon from "@mui/icons-material/Sell";
import BannerPc from "./BannerPc";
import { AxiosResponse } from "axios";
import { getBanner } from "@/api/commonApi";
import "../../index.scss";

interface Banner {
  id: string;
  image: string;
  title: string;
  url: string;
  summary: string;
}

// Interface cho dữ liệu banner
interface DataBanner {
  banner_slide_home: Banner[];
  banner_small: Banner[];
  banner_mobile: Banner[];
}
export default function Banner() {
  const [bannerData, setBannerData] = useState({});

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const dataBanner: AxiosResponse<DataBanner> = await getBanner();
        setBannerData(dataBanner.banner);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchBanner();
  }, []);

  return (
    <>
      <Box className="block_banner">
        <Box className="wrap-label">
          <BannerPc dataBanner={bannerData} />
        </Box>
      </Box>
    </>
  );
}
