import { Box, Grid, Link, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import { NavLink } from "react-router-dom";
const dataBox = [
  {
    title: "Khách hàng cá nhân",
    listSupport: [
      {
        icon: <CallIcon fontSize="small" />,
        text: "098.161.8888",
        name: "Mr.Quety",
        link: "#",
      },
      {
        icon: <CallIcon fontSize="small" />,
        text: "098.161.8888",
        name: "Mr.Quety",
        link: "#",
      },
      {
        icon: <CallIcon fontSize="small" />,
        text: "098.161.8888",
        name: "Mr.Quety",
        link: "#",
      },
    ],
  },
  {
    title: "Khách hàng cá nhân",
    listSupport: [
      {
        icon: <CallIcon fontSize="small" />,
        text: "098.161.8888",
        name: "Mr.Quety",
        link: "#",
      },
      {
        icon: <CallIcon fontSize="small" />,
        text: "098.161.8888",
        name: "Mr.Quety",
        link: "#",
      },
      {
        icon: <CallIcon fontSize="small" />,
        text: "098.161.8888",
        name: "Mr.Quety",
        link: "#",
      },
    ],
  },
  {
    title: "Khách hàng cá nhân",
    listSupport: [
      {
        icon: <CallIcon fontSize="small" />,
        text: "098.161.8888",
        name: "Mr.Quety",
        link: "#",
      },
      {
        icon: <CallIcon fontSize="small" />,
        text: "098.161.8888",
        name: "Mr.Quety",
        link: "#",
      },
      {
        icon: <CallIcon fontSize="small" />,
        text: "098.161.8888",
        name: "Mr.Quety",
        link: "#",
      },
    ],
  },
  {
    title: "Khách hàng cá nhân",
    listSupport: [
      {
        icon: <CallIcon fontSize="small" />,
        text: "098.161.8888",
        name: "Mr.Quety",
        link: "#",
      },
      {
        icon: <CallIcon fontSize="small" />,
        text: "098.161.8888",
        name: "Mr.Quety",
        link: "#",
      },
      {
        icon: <CallIcon fontSize="small" />,
        text: "098.161.8888",
        name: "Mr.Quety",
        link: "#",
      },
    ],
  },
];

export default function BoxSuport() {
  return (
    <>
      <Box
        className={`BoxSupport`}
        sx={(theme) => ({ background: theme.backgroundColor.blackWhite })}
      >
        <Grid container className="item-row" spacing={2}>
          <Grid item xs={3}>
            <Typography component={"div"} className="title-box-support">
              Hỗ trợ trực tuyến
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Grid container className="wrap-contact">
              {dataBox.map((item, index) => (
                <Grid item xs={3} className="item-col" key={index}>
                  <Typography
                    className={`item-col-title`}
                    sx={(theme) => ({ color: theme.colorText.primary })}
                  >
                    {item.title}
                  </Typography>
                  {item.listSupport.map((item2, index2) => (
                    <Box className={`box-list`} key={index2}>
                      <Link
                        to={item2.link}
                        component={NavLink}
                        sx={(theme) => ({
                          color: theme.colorText.primary,
                          display: "flex",
                          alignItems: "center",
                          marginBottom: theme.spacing(1),
                        })}
                      >
                        <span className="icon-link">{item2.icon}</span>
                        <Box
                          component={"span"}
                          className="tel"
                          sx={{
                            color: "red",
                            padding: "0 10px",
                          }}
                        >
                          {item2.text}
                        </Box>
                        <span className="name">{item2.name}</span>
                      </Link>
                    </Box>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
