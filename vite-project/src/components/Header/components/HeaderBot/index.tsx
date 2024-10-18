import { Box, Grid, Link, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import SavingsIcon from "@mui/icons-material/Savings";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { NavLink, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { BlurContext } from "@/components/Header";

// const useStyles = makeStyles((theme) => ({
//   buttonCategory: {
//     background: theme.backgroundColor.gradient,
//   },
//   bgTheme: {
//     background: theme.backgroundColor.primary,
//   },
//   buttomSupport: {
//     display: "flex",
//     alignItems: "center",
//     width: "100%",
//     backgroundColor: theme.backgroundColor.blackWhite2,
//     justifyContent: "center",
//     fontWeight: "bold",
//     height: "37px",
//     borderRadius: "5px",
//     [theme.breakpoints.down("xxl")]: {
//       height: "34px",
//     },
//     "&:hover": {
//       background: theme.backgroundColor.gradient,
//       color: theme.palette.common.white,
//       "& .MuiTypography-root": {
//         color: theme.palette.common.white,
//       },
//     },
//   },
//   headerBot: {
//     backgroundColor: theme.header.background,
//     paddingBottom: "10px",
//   },
//   listItem: {
//     "&:hover": {
//       "& .itemLv1": {
//         backgroundColor: theme.palette.secondary.main,
//       },
//     },
//     "& .itemLv1": {
//       "&::after": {
//         borderTop: "31px solid transparent",
//         borderBottom: "31px solid transparent",
//         borderLeft: `19px solid ${theme.palette.secondary.main}`,
//         [theme.breakpoints.down("xxl")]: {
//           borderTop: "29px solid transparent",
//           borderBottom: "29px solid transparent",
//         },
//         [theme.breakpoints.down("xl")]: {
//           borderTop: "24px solid transparent",
//           borderBottom: "24px solid transparent",
//         },
//       },
//     },
//   },
//   filterIcon: {
//     filter: theme.iconNav.main,
//   },
// }));

const ButtonSupport = (props) => {
  const { icon, link, name } = props;
  return (
    <Box>
      <Link
        to={link}
        component={NavLink}
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          width: "100%",
          backgroundColor: theme.backgroundColor.blackWhite2,
          justifyContent: "center",
          fontWeight: "bold",
          height: "37px",
          borderRadius: "5px",
          [theme.breakpoints.down("xxl")]: {
            height: "34px",
          },
          "&:hover": {
            background: theme.backgroundColor.gradient,
            color: theme.palette.common.white,
            "& .MuiTypography-root": {
              color: theme.palette.common.white,
            },
          },
        })}
      >
        {icon}
        <Typography
          component={"div"}
          sx={{ fontWeight: "bold", paddingLeft: "10px" }}
        >
          {name}
        </Typography>
      </Link>
    </Box>
  );
};

export default function HeaderBot() {
  const context = useContext(BlurContext);
  const categoriesProduct = useSelector(
    (state: RootState) => state.product.categories
  );
  let location = useLocation();
  const baseUrl = "https://hanoinew-quety.web.app/";
  console.log("location", location);
  console.log("categories", categoriesProduct);
  return (
    <Box
      className={`headerBot`}
      sx={(theme) => ({
        backgroundColor: theme.header.background,
        paddingBottom: "10px",
      })}
    >
      <Box className={`wrap-label `}>
        <Grid container columnSpacing={"10px"}>
          <Grid item xs={2.4}>
            <Box
              sx={{ position: "relative" }}
              className="group-cat"
              onMouseEnter={() => context.handleMouseEnter("hoverCategory")}
              onMouseLeave={() => context.handleMouseLeave()}
            >
              <Box
                className={`buttonCategory`}
                sx={(theme) => ({ background: theme.backgroundColor.gradient })}
              >
                <MenuIcon />
                <Typography
                  component={"div"}
                  sx={{
                    paddingLeft: "10px",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  Danh mục sản phẩm1
                </Typography>
              </Box>
              {(context.hoverEnter || location.pathname === "/") &&
                categoriesProduct.length > 0 && (
                  <Box
                    className={`wrap-list-category ${
                      location.pathname !== "/" && "no-home"
                    }`}
                  >
                    <Box
                      className={`wrap-spacing`}
                      sx={(theme) => ({
                        background: theme.backgroundColor.primary,
                      })}
                    >
                      {categoriesProduct.map((category, lv1) => (
                        <Box
                          key={lv1}
                          className={`listItem ${
                            category.isParent === 1 ? "isParent" : ""
                          }`}
                          sx={(theme) => ({
                            "&:hover": {
                              "& .itemLv1": {
                                backgroundColor: theme.palette.secondary.main,
                              },
                            },
                            "& .itemLv1": {
                              "&::after": {
                                borderTop: "31px solid transparent",
                                borderBottom: "31px solid transparent",
                                borderLeft: `19px solid ${theme.palette.secondary.main}`,
                                [theme.breakpoints.down("xxl")]: {
                                  borderTop: "29px solid transparent",
                                  borderBottom: "29px solid transparent",
                                },
                                [theme.breakpoints.down("xl")]: {
                                  borderTop: "24px solid transparent",
                                  borderBottom: "24px solid transparent",
                                },
                              },
                            },
                          })}
                        >
                          <Link
                            component={NavLink}
                            to={`/danh-muc-san-pham/`}
                            className={`itemLv1`}
                          >
                            <Box component={"span"}>
                              <img
                                sx={(theme) => ({ filter: theme.iconNav.main })}
                                src={`${baseUrl}${category.thumbnail.icons}`}
                              />
                            </Box>
                            <Box component={"span"}>{category.name}</Box>
                          </Link>
                          {category.isParent === 1 && (
                            <Box
                              className={`wrapItemLv2`}
                              sx={(theme) => ({
                                background: theme.backgroundColor.primary,
                              })}
                            >
                              {category.children.map((category2, lv2) => (
                                <Box className="wrapListCatlv2" key={lv2}>
                                  <Link
                                    className={`itemLv2`}
                                    component={NavLink}
                                    to={`/danh-muc-san-pham/`}
                                  >
                                    {category2.name}
                                  </Link>
                                  {category2.isParent === 1 &&
                                    category2.children.map((category3, lv3) => (
                                      <Box className="wrapListCatLv3" key={lv3}>
                                        <Link
                                          className={`itemLv3`}
                                          component={NavLink}
                                          to={`/danh-muc-san-pham/`}
                                        >
                                          1111111 {category3.name}
                                        </Link>
                                      </Box>
                                    ))}
                                </Box>
                              ))}
                            </Box>
                          )}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}
            </Box>
          </Grid>
          <Grid item xs={2.4}>
            <ButtonSupport
              link="/gia-uu-dai.html"
              icon={<LocalAtmIcon />}
              name={"Giá ưu đãi nhất"}
            />
          </Grid>
          <Grid item xs={2.4}>
            <ButtonSupport
              link="ho-tro-tra-gop.html"
              icon={<SavingsIcon />}
              name={"Hỗ trợ trả góp"}
            />
          </Grid>
          <Grid item xs={2.4}>
            <ButtonSupport
              link="bao-hanh-tan-nha.html"
              icon={<SettingsIcon />}
              name={"Bảo hành tận nhà"}
            />
          </Grid>
          <Grid item xs={2.4}>
            <ButtonSupport
              link="mien-phi-van-chuyen.html"
              icon={<LocalShippingIcon />}
              name={"Miễn phí vận chuyển"}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
