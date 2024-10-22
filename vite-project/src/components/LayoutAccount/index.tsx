import { Box, Button, Link, Typography } from "@mui/material";
import React, { useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CircularProgress from "@mui/material/CircularProgress";
import { IconsPage } from "@/const/images";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import { useSelector } from "react-redux";
import "@/components/LayoutAccount/styles.scss";
import Breadcrumb from "@/components/Breadcrumb";
import FavoriteIcon from "@mui/icons-material/Favorite";

const routes = [
  {
    title: "Thông tin tài khoản",
    icon: <PersonIcon fontSize="small" />,
    url: "/tai-khoan",
  },
  {
    title: "Quản lý đơn hàng",
    icon: <NotificationsIcon fontSize="small" />,
    url: "/order",
  },
  {
    title: "Thiết lập lại mật khẩu",
    icon: <LockIcon fontSize="small" />,
    url: "/change-password",
  },
  {
    title: "Sản phẩm yêu thích",
    icon: <FavoriteIcon fontSize="small" />,
    url: "/san-pham-yeu-thich",
  },
];

const LayoutAccount = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {}, []);

  return (
    <>
      <Breadcrumb path="account" namePage="Tài khoản" />
      <Box className="page-acc">
        <Box className="wrap-label">
          <Box className="wrap-ct">
            <Box
              className={`left-acc`}
              sx={(theme) => ({
                background: theme.backgroundColor.blackWhite,
              })}
            >
              <Box className="name-acc">
                <Box className="left-img">
                  {!!user?.avatar ? (
                    <img src={user.avatar} />
                  ) : (
                    <img src={IconsPage.Avatar} />
                  )}
                </Box>
                <Box className="right-text">
                  <Typography className="sub">Tài khoản của</Typography>
                  {user && (
                    <Typography className="nameuser">
                      {user.userName}
                    </Typography>
                  )}
                </Box>
              </Box>
              <Box className="wrap-nav ">
                {routes.map((route, index) => (
                  <Link
                    className="link-nav"
                    to={route.url}
                    component={NavLink}
                    key={index}
                  >
                    <Box className="icon">{route.icon}</Box>
                    <Box className="text">{route.title}</Box>
                  </Link>
                ))}
              </Box>
            </Box>
            <Box className={`right-acc `}>{children}</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LayoutAccount;
