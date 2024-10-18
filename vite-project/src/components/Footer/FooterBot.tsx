import { Box, Grid, Link, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink } from "react-router-dom";
import { IconsPage } from "@/const/images";

const listTextFooterBot = [
  {
    title: "Công ty cổ phần thương mại và công nghệ máy tính Hà Nội",
    description: `©2021 - Công Ty Cổ Phần Thương Mại Và Công Nghệ Máy Tính Hà Nội Mới 
        GPKD số: 0102758480 Do cục thuế Thành phố Hà Nội cấp ngày 28.05.2008
        Copyright © Hanoinew.vn. All rights reserved.`,
    icon: IconsPage.IconBct,
  },
  {
    title: "Showroom bán hàng",
    listLink: [
      {
        name: "153 Trường Chinh - Thanh Xuân - Hà Nội",
        url: "#",
        icon: <LocationOnIcon />,
      },
      {
        name: "0981618888",
        url: "#",
        icon: <CallIcon />,
      },
      {
        name: "cskh@quety.com.vn",
        url: "#",
        icon: <EmailIcon />,
      },
    ],
  },
  {
    title: "Trung tâm bảo hành",
    listLink: [
      {
        name: "153 Trường Chinh - Thanh Xuân - Hà Nội",
        url: "#",
        icon: <LocationOnIcon />,
      },
      {
        name: "0981618888",
        url: "#",
        icon: <CallIcon />,
      },
      {
        name: "cskh@quety.com.vn",
        url: "#",
        icon: <EmailIcon />,
      },
    ],
  },
];

export default function FooterBot() {
  return (
    <Box
      className={`footer-bot`}
      sx={(theme) => ({
        background: theme.backgroundColor.footerBot,
        color: "#fff",
      })}
    >
      <Box className="wrap-label">
        <Grid container>
          {listTextFooterBot.map((item, index1) => (
            <Grid key={index1} item xs={12} md={index1 === 0 ? 6 : 3}>
              <Box className="col-item">
                <Typography className={`title`} variant="h5" component="div">
                  {item.title}
                </Typography>
                {item.description && (
                  <Typography className="description">
                    {item.description.split("\n").map((line, id1) => (
                      <Box key={id1} component={"span"}>
                        {" "}
                        {line} <br />
                      </Box>
                    ))}
                  </Typography>
                )}
                {item.icon && <img className="img-bct" src={item.icon} />}
                {item.listLink &&
                  item.listLink.map((link, index2) => (
                    <Link
                      className="link-label"
                      key={index2}
                      to="#"
                      component={NavLink}
                    >
                      <Box className="icon" component={"span"}>
                        {link.icon}
                      </Box>
                      <Box
                        className={`textLink`}
                        sx={(theme) => ({
                          color: theme.colorText.secondary,
                        })}
                        component={"span"}
                      >
                        {link.name}
                      </Box>
                    </Link>
                  ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
