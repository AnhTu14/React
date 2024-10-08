import { Box, Link, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import RedeemIcon from "@mui/icons-material/Redeem";
import FeedIcon from "@mui/icons-material/Feed";
import { useContext } from "react";
import { BlurContext } from "@/components/Header";
import { useTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import BoxAddress from "../BoxAddress";
import BoxSuport from "../BoxSuport";
import { useSelector } from "react-redux";
import axios from "axios";

const listLinkHeaderTop = [
  {
    link: "/",
    name: "Địa chỉ cửa hàng",
    nickName: "address",
    icon: <RoomIcon />,
  },
  {
    link: "#",
    name: "Hỗ trợ trực tuyến",
    nickName: "support",
    icon: <LocalPhoneIcon />,
  },
  {
    link: "/tin-tuc/danh-muc/tin-khuyen-mai-sd9jdw.html",
    name: "Khuyến mãi",
    nickName: "gift",
    icon: <RedeemIcon />,
  },
  {
    link: "/tin-tuc",
    name: "Tin tức",
    nickName: "news",
    icon: <FeedIcon />,
  },
];

function HeaderTop() {
  const context: unknown = useContext(BlurContext);
  const user = useSelector((state) => state.auth.user);
  const navigator = useNavigate();
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
      })}
      className={`header-top`}
      component={"div"}
      position="relative"
    >
      <Box className="wrap-label">
        <Box className="wrap-ct">
          <Box className="header-top-left">
            {listLinkHeaderTop.map((item, index) => (
              <Box
                className="item"
                key={index}
                onMouseEnter={(e) =>
                  (item.nickName === "address" ||
                    item.nickName === "support") &&
                  context.handleMouseEnter("hoverSupport")
                }
                onMouseLeave={(e) => context.handleMouseLeave(e)}
              >
                <Link
                  component={NavLink}
                  to={item.link}
                  // className="btn-h bg-radien"
                  className={
                    item.nickName === "address"
                      ? "btn-h bg-radien"
                      : item.nickName === "support"
                      ? "btn-h bg-radien"
                      : "btn-h"
                  }
                >
                  <span className="icon-v21">{item.icon}</span>
                  <span className="text">{item.name}</span>
                </Link>
                {item.nickName === "address" && <BoxAddress />}
                {item.nickName === "support" && <BoxSuport />}
              </Box>
            ))}
          </Box>
          <Box className="header-top-right">
            <Box className="icon-theme" sx={{ color: "#fff" }}>
              <LightModeIcon fontSize="small" />
            </Box>
            <Box className="acc">
              {!user && (
                <>
                  <Link
                    to="/dang-ky"
                    component={NavLink}
                    sx={{ color: "#fff" }}
                  >
                    Đăng ký{" "}
                    <Box component={"span"} padding="0 12px">
                      |
                    </Box>
                  </Link>
                  <Link
                    to="/dang-nhap"
                    component={NavLink}
                    sx={{ color: "#fff" }}
                  >
                    Đăng nhập
                  </Link>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderTop;
