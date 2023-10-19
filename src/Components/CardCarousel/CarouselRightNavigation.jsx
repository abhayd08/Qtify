import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../assets/RightArrow.svg";
import styles from "./CardCarousel.module.css";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(false);
  console.log(isEnd);
  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper, isEnd, swiper.isEnd]);
  return (
    <div className={styles.rightNavigation}>
      {isEnd || (
        <RightArrow
          onClick={() => {
            swiper.slideNext();
          }}
        />
      )}
    </div>
  );
};

export default CarouselRightNavigation;
