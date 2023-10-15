import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";
import styles from "./CardCarousel.module.css";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  return (
    <div className={styles.leftNavigation}>
      {
        <LeftArrow
          onClick={() => {
            swiper.slidePrev();
          }}
        />
      }
    </div>
  );
};

export default CarouselLeftNavigation;
