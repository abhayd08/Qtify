import React, { useEffect } from "react";
import styles from "./CardCarousel.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);
  }, [data, swiper]);
};

const CardCarousel = ({ data, renderComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>{renderComponent(item)}</SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
