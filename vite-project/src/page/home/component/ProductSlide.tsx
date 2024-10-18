import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Import navigation styles

// Import Swiper modules
import { Navigation } from "swiper/modules"; // Import Navigation module for version 11.x
import ItemProduct from "@/components/ItemProduct/index";

export default function ProductSlide(props) {
  const { data } = props;

  return (
    <Box
      className={`list-product`}
      sx={(theme) => ({
        background: theme.backgroundColor.primary,
      })}
    >
      <Swiper
        className="mySwiper"
        spaceBetween={10}
        slidesPerView={6}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            spaceBetween: 10,
            slidesPerView: 4,
          },
          1200: {
            spaceBetween: 10,
            slidesPerView: 5,
          },
          1651: {
            spaceBetween: 10,
            slidesPerView: 6,
          },
        }}
      >
        {data.map((itemSlide, indexSlide) => (
          <SwiperSlide key={indexSlide}>
            <ItemProduct itemData={itemSlide} indexItemData={indexSlide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
