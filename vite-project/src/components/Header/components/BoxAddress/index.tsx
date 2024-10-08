import { Box, Link, Typography, useTheme } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { NavLink } from "react-router-dom";
const colBox = [
  {
    title: "Showroom bán hàng",
    listLink: [
      {
        icon: <RoomIcon />,
        text: "30 Võ Văn Dũng - Đống Đa - Hà Nội",
        link: "#",
      },
      {
        icon: <CallIcon />,
        text: "Hotline: 0981618888",
        link: "#",
      },
      {
        icon: <MailOutlineIcon />,
        text: "Email: cskh@quetycomputer.com",
        link: "#",
      },
      {
        icon: <AccessTimeIcon />,
        text: "Giờ làm việc: Từ Thứ 2 - Thứ 7 : 8.30-19.00",
        link: "#",
      },
    ],
  },
  {
    title: "Trung tâm bảo hành",
    listLink: [
      {
        icon: <RoomIcon />,
        text: "30 Võ Văn Dũng - Đống Đa - Hà Nội",
        link: "#",
      },
      {
        icon: <CallIcon />,
        text: "Hotline: 0981618888",
        link: "#",
      },
      {
        icon: <MailOutlineIcon />,
        text: "Email: cskh@quetycomputer.com",
        link: "#",
      },
      {
        icon: <AccessTimeIcon />,
        text: "Giờ làm việc: Từ Thứ 2 - Thứ 7 : 8.30-19.00",
        link: "#",
      },
    ],
  },
];

// const useStyles = makeStyles((theme: any) => ({
//   bgBranding: {
//     backgroundColor: theme.palette.primary.main,
//   },
//   colorWhite: {
//     color: "#fff",
//   },
//   boxPosition: {
//     position: "absolute",
//     top: "100%",
//     left: 0,
//     width: "100%",
//     zIndex: 999999,
//     borderBottomRightRadius: "5px",
//     borderBottomLeftRadius: "5px",
//     padding: theme.spacing(2),
//     backgroundColor: theme.backgroundColor.blackWhite,
//   },
//   wrapText: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   itemCol: {
//     width: "50%",
//   },
//   titleItemCol: {
//     color: theme.colorText.primary,
//     fontWeight: "bold",
//     textTransform: "uppercase",
//     position: "relative",
//     [theme.breakpoints.down("xl")]: {
//       marginBottom: "12px",
//     },
//     "&::after": {
//       content: '""',
//       width: "75px",
//       height: "2px",
//       background: "#f00",
//       position: "absolute",
//       zIndex: 1,
//       bottom: "0px",
//       left: "0px",
//     },
//   },
//   linkItem: {
//     display: "flex",
//     marginTop: "15px",
//     alignItems: "center",
//     color: theme.colorText.primary,
//     [theme.breakpoints.down("xl")]: {
//       marginTop: "5px",
//     },
//     "& span": {
//       display: "flex",
//       width: "25px",
//       "& svg": {
//         width: " 15px",
//       },
//     },
//   },
// }));

export default function BoxAddress() {
  return (
    <Box
      className={"blok-addres sub-menu-address"}
      sx={(theme) => ({ background: theme.backgroundColor.blackWhite })}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {colBox.map((item, index) => (
          <Box key={index} sx={{ width: "50%" }}>
            <Typography
              sx={(theme) => ({
                color: theme.colorText.primary,
                fontWeight: "500",
                textTransform: "uppercase",
                position: "relative",
                [theme.breakpoints.down("xl")]: {
                  marginBottom: "12px",
                },
                "&::after": {
                  content: '""',
                  width: "75px",
                  height: "2px",
                  background: "#f00",
                  position: "absolute",
                  zIndex: 1,
                  bottom: "0px",
                  left: "0px",
                },
              })}
              variant="h6"
              component={"h6"}
            >
              {item.title}
            </Typography>
            <Box>
              {item.listLink.map((item, index) => (
                <Link
                  key={index}
                  component={NavLink}
                  to={item.link}
                  sx={(theme) => ({
                    display: "flex",
                    alignItems: "center",
                    color: theme.colorText.primary,
                    [theme.breakpoints.down("xl")]: {
                      marginTop: "5px",
                    },
                    "& span": {
                      display: "flex",
                      width: "25px",
                      "& svg": {
                        width: " 15px",
                      },
                    },
                  })}
                >
                  <span>{item.icon}</span>
                  {item.text}
                </Link>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
