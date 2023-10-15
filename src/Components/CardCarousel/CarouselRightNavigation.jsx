import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../assets/RightArrow.svg";
import styles from "./CardCarousel.module.css";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  return (
    <div className={styles.rightNavigation}>
      {
        <RightArrow
          onClick={() => {
            swiper.slideNext();
          }}
        />
      }
    </div>
  );
};

export default CarouselRightNavigation;
