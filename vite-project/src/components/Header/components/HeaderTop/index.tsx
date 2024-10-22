import { Box, Link, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import RedeemIcon from "@mui/icons-material/Redeem";
import FeedIcon from "@mui/icons-material/Feed";
import { useContext } from "react";
import { BlurContext } from "@/components/Header";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import BoxAddress from "../BoxAddress";
import BoxSuport from "../BoxSuport";
import { IconsPage } from "@/const/images";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@/context/themeContext";
import { logoutSuccess } from "@/page/Auth/authSlice";

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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { theme, toggleTheme } = useTheme();
  console.log("themuser", user);
  const navigate = useNavigate();

  const hanldeLogOut = () => {
    localStorage.removeItem("accessToken");
    dispatch(logoutSuccess());
    navigate("/dang-nhap");
  };
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
            <Box
              className="icon-theme"
              sx={{ color: "#fff" }}
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <LightModeIcon fontSize="small" />
              ) : (
                <NightlightRoundIcon fontSize="small" />
              )}
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
              {user && (
                <Box className="box-user">
                  <Box className="wrap-img">
                    {!user.avatar && <img src={IconsPage.Avatar} />}
                    {user.avatar && <img src={user.avatar} />}
                  </Box>
                  <Box className="option-user">
                    <Box
                      className={`wrap-op`}
                      sx={(theme) => ({
                        background: theme.backgroundColor.blackWhite2,
                      })}
                    >
                      <Link
                        className="link-op"
                        to="/tai-khoan"
                        component={NavLink}
                      >
                        <Typography>Tài khoản</Typography>
                      </Link>
                      <Link className="link-op" to="/order" component={NavLink}>
                        <Typography>Đơn mua</Typography>
                      </Link>
                      <Link
                        className="link-op"
                        to="/san-pham-yeu-thich"
                        component={NavLink}
                      >
                        <Typography>Yêu thích</Typography>
                      </Link>
                      <Box className="link-op" onClick={hanldeLogOut}>
                        <Typography>Đăng xuất</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderTop;
