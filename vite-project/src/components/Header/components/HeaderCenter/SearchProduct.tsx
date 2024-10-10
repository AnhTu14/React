import {
  alpha,
  Box,
  CircularProgress,
  InputBase,
  Link,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useNavigate } from "react-router-dom";
import { formatCurrency } from "@utils/formatNumBerPrice";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { sortPrice } from "utils/category";
import { makeStyles } from "@mui/styles";
import { useQuery } from "react-query";
import { getProducts } from "contants/api";
import { ToSlug } from "@utils/format";

const useStyles = makeStyles((theme) => ({
  Search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    zIndex: "99999",
  },
  groupIp: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.backgroundColor.search,
    border: theme.border.search,
    position: "relative",
    zIndex: "99999",
  },
  SearchIconWrap: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colorText.primary,
  },
  StyledInputBase: {
    color: theme.colorText.primary,
    width: "100%",
    "& .MuiInputBase-input": {
      padding: "8px 8px 8px 47px",
      color: `${theme.colorText.primary} !important`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.down("xxl")]: {
        padding: "6px 8px 6px 47px",
      },
    },
  },
  boxInsearch: {
    background: theme.backgroundColor.search,
    border: `${theme.border.search} !important`,
  },
}));

export default function SearchProduct() {
  const navigate = useNavigate();
  const classes = useStyles();
  const domain = "https://hanoinew.vn";
  const [dataSearch, setDataSearch] = useState("");
  const [keySearch, setKeySearch] = useState(null);
  const [activeBlur, setActiveBlur] = useState(false);

  //   const { data, isFetching } = useQuery({
  //     queryKey: ["search", { keySearch }],
  //     queryFn: getProducts,
  //     cacheTime: 0,
  //     enabled: !!keySearch,
  //   });
  // debounce search
  //   const typingTimeoutRef = useRef(null);
  const handleSearch = (e) => {
    const value = e.target.value.trim("");
    console.log("value", value);
  };
  //   const dataSearch = data?.products;
  const onEnterSearch = (e) => {
    setTimeout(() => {
      if (e.keyCode === 13) {
        setKeySearch(null);
        setActiveBlur(false);
        navigate(`/tim-kiem.html?q=${e.target.value}`);
      }
    }, 500);
  };
  const handleCloseBoxResult = () => {
    setActiveBlur(false);
    setKeySearch(null);
  };

  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 1),
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        zIndex: "99999",
      })}
    >
      <Box>
        <Box
          sx={(theme) => ({
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.backgroundColor.search,
            border: theme.border.search,
            position: "relative",
            zIndex: "99999",
          })}
        >
          <Box
            sx={(theme) => ({
              padding: theme.spacing(0, 2),
              height: "100%",
              position: "absolute",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: theme.colorText.primary,
            })}
          >
            <SearchIcon />
          </Box>
          <InputBase
            sx={(theme) => ({
              color: theme.colorText.primary,
              width: "100%",
              "& .MuiInputBase-input": {
                padding: "8px 8px 8px 47px",
                color: `${theme.colorText.primary} !important`,
                transition: theme.transitions.create("width"),
                width: "100%",
                [theme.breakpoints.down("xxl")]: {
                  padding: "6px 8px 6px 47px",
                },
              },
            })}
            placeholder="Search…"
            onChange={(e) => handleSearch(e)}
            onKeyDown={(e) => onEnterSearch(e)}
            onClick={() => setActiveBlur(true)}
          />
        </Box>
        {dataSearch && (
          <Box
            className={`box-insearch custom-scroll-bar`}
            sx={(theme) => ({
              background: theme.backgroundColor.search,
              border: `${theme.border.search} !important`,
            })}
          >
            {dataSearch?.length > 0 &&
              dataSearch.map((item, index) => (
                <Link
                  key={index}
                  to={`/san-pham/`}
                  component={NavLink}
                  className={"insearch_item"}
                  onClick={handleCloseBoxResult}
                >
                  <Box className="left_img">
                    <img src="" alt="" />
                  </Box>
                  <Box className="right_content">
                    <Typography component={"span"} className="content_title">
                      {item.productName || title}
                    </Typography>
                    <Typography component={"span"} className="content_price">
                      10000 đ
                    </Typography>
                  </Box>
                </Link>
              ))}
            {dataSearch?.length === 0 && <Box>Không tìm thấy sản phẩm</Box>}
          </Box>
        )}
      </Box>
      <Box
        className={`blur-search ${activeBlur ? "active" : ""}`}
        onClick={() => handleCloseBoxResult()}
      ></Box>
    </Box>
  );
}
