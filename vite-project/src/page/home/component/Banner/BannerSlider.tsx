import { Box, Link } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { NavLink } from "react-router-dom";

export default function BannerSlide(props) {
  const { data } = props;
  console.log("data", data);
  return (
    <Box>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {data &&
          data.map((itemSlide, indexSlide) => (
            <SwiperSlide key={indexSlide}>
              <Link
                to={itemSlide.url}
                component={NavLink}
                sx={() => ({
                  display: "block",
                  "& img": {
                    display: "block",
                    width: "100%",
                    height: "auto",
                  },
                })}
              >
                <img src={itemSlide.image} all={itemSlide.title} />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
}
