import { Box, Grid, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import BannerSlide from "./BannerSlider";

export default function BannerPc({ dataBanner }) {
  return (
    <>
      <Box className="group-banner-1">
        <Grid container spacing={"10px"}>
          <Grid
            item
            xs={12 / 5}
            sx={{
              display: {
                xs: "none",
                lg: "block",
              },
            }}
          >
            <Box
              sx={() => ({
                background: "#fff",
                height: "100%",
              })}
            ></Box>
          </Grid>
          <Grid item xs={12} lg={(12 / 5) * 4} className="p-top0">
            <Box sx={{ marginTop: "0px" }}>
              <Grid container spacing={"10px"}>
                <Grid item xs={(12 / 3) * 2}>
                  {dataBanner?.banner_slide_home?.length > 0 && (
                    <BannerSlide data={dataBanner.banner_slide_home} />
                  )}
                </Grid>
                <Grid item xs={12 / 3}>
                  {dataBanner?.banner_small
                    ?.slice(0, 2)
                    .map((banner, indexBanner) => (
                      <Link
                        to={banner.url}
                        component={NavLink}
                        key={indexBanner}
                        sx={{
                          display: "block",
                          marginBottom: indexBanner === 0 ? "10px" : 0,
                          "& img": {
                            display: "block",
                            width: "100%",
                            height: "auto",
                          },
                        }}
                      >
                        <img src={banner.image} alt={banner.title} />
                      </Link>
                    ))}
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="group-banner-2">
        <Grid container spacing={"10px"}>
          <Grid
            item
            xs={12 / 5}
            sx={{
              display: {
                xs: "none",
                lg: "block",
              },
            }}
          >
            <Box
              sx={() => ({
                background: "#fff",
                height: "100%",
              })}
            ></Box>
          </Grid>
          <Grid item xs={12} lg={(12 / 5) * 4}>
            <Grid container spacing={"10px"}>
              {dataBanner?.banner_small
                ?.slice(2)
                .map((itemBanner, indexBanner) => (
                  <Grid
                    key={indexBanner}
                    item
                    xs={4}
                    sx={{ paddingTop: "0px" }}
                    className="p-top0"
                  >
                    <Link
                      to={itemBanner.url}
                      component={NavLink}
                      sx={{
                        "& img": {
                          display: "block",
                          width: "100%",
                          height: "auto",
                        },
                      }}
                    >
                      <img src={itemBanner.image} alt={itemBanner.title} />
                    </Link>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
