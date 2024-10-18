import { Box, Link, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Import navigation styles

// Import Swiper modules
import { Navigation } from "swiper/modules"; // Import Navigation module for version 11.x
import { NavLink } from "react-router-dom";

export default function ArticleSlide(props) {
  const { data } = props;
  const FormatTimeV21 = (time: number) => {
    const currentdate = new Date(+time);
    const getDay =
      currentdate.getDate() < 10
        ? `0${currentdate.getDate()}`
        : currentdate.getDate();
    const getMonth =
      currentdate.getMonth() + 1 < 10
        ? `0${currentdate.getMonth() + 1}`
        : currentdate.getMonth() + 1;
    return {
      day: getDay,
      month: getMonth,
    };
  };
  return (
    <Box className="wrap-slider-article">
      <Swiper
        className="mySwiper"
        spaceBetween={10}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            spaceBetween: 15,
            slidesPerView: 3,
          },
        }}
      >
        {data.map((itemSlide, indexSlide) => (
          <SwiperSlide key={indexSlide}>
            <Link
              to={`/tin-tuc/`}
              component={NavLink}
              className={"item-article-home"}
            >
              <Box className="wrap-img">
                <img
                  src={itemSlide.articleDetail.image}
                  alt={itemSlide.title}
                />
              </Box>
              <Box className="group-text">
                <Box className="text-left">
                  <div className="left">
                    <span className="day">
                      {FormatTimeV21(itemSlide.articleDetail.createDate).day}
                    </span>
                    <span className="month">
                      TH
                      <span className="in-month">
                        {
                          FormatTimeV21(itemSlide.articleDetail.createDate)
                            .month
                        }
                      </span>
                    </span>
                  </div>
                </Box>
                <Box className="text-right">
                  <Typography component={"div"} className={"is-this"}>
                    Tin tức
                  </Typography>
                  <Typography component={"div"} className="name-article">
                    {itemSlide.title}
                  </Typography>
                </Box>
              </Box>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
