import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";
import styles from "./CardCarousel.module.css";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper, isBeginning, swiper.isBeginning]);
  return (
    <div className={styles.leftNavigation}>
      {isBeginning || (
        <LeftArrow
          onClick={() => {
            swiper.slidePrev();
          }}
        />
      )}
    </div>
  );
};

export default CarouselLeftNavigation;
