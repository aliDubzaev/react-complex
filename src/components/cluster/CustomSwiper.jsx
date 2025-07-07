import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/bundle";
import "./cluster.css";

import leftArr from "./img/left.png";
import rightArr from "./img/right.png";

function CustomSwiper({ img }) {
  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    swiperRef.current?.swiper?.slideNext();
  };

  const goToPrevSlide = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  return (
    <div className="clusterWrapper">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1.1, spaceBetween: 12 },
          768: { slidesPerView: 1.5, spaceBetween: 20 },
          1200: { slidesPerView: 2, spaceBetween: 24 }
        }}
        navigation={{
          prevEl: ".customPrev",
          nextEl: ".customNext",
        }}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="clusterSwiper"
      >
        {img.map((imgSrc, index) => (
          <SwiperSlide className="clusterSlide" key={index}>
            <img src={imgSrc} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="customPrev" onClick={goToPrevSlide}>
        <img src={leftArr} alt="Left Arrow" />
      </div>
      <div className="customNext" onClick={goToNextSlide}>
        <img src={rightArr} alt="Right Arrow" />
      </div>
    </div>
  );
}

export default CustomSwiper;
