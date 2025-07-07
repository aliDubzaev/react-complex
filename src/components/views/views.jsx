import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import city from "./img/moscow.jpg";
import matveevskiy from "./img/matveevsky.jpg";
import ramenki from "./img/ramenky.jpg";
import poklonnaya from "./img/poklonnaya.jpg";
import leftArr from "./img/left.png";
import rightArr from "./img/right.png";

import 'swiper/css';
import 'swiper/css/bundle';

import './views.css';

function Views() {
  const swiperRef = useRef(null);

  function goToNextSlide() {
    swiperRef.current.swiper.slideNext();
  }

  function goToPrevSlide() {
    swiperRef.current.swiper.slidePrev();
  }

  return (
    <section className="viewSection">
      <h1>Наслаждайтесь видами из окон своей квартиры</h1>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="viewSwiper">
        <SwiperSlide className="viewSlide">
          <div className="imageWrapper">
            <img src={poklonnaya} alt="Поклонная гора" />
            <div className="imageLabel">Поклонная гора</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="viewSlide">
          <div className="imageWrapper">
            <img src={city} alt="Москва Сити" />
            <div className="imageLabel">Москва Сити</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="viewSlide">
          <div className="imageWrapper">
            <img src={matveevskiy} alt="Матвеевский лес" />
            <div className="imageLabel">Матвеевский лес</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="viewSlide">
          <div className="imageWrapper">
            <img src={ramenki} alt="Раменки" />
            <div className="imageLabel">Район Раменки</div>
          </div>
        </SwiperSlide>
        <div className="customPrev" onClick={goToPrevSlide}>
          <img src={leftArr} alt="prev" />
        </div>
        <div className="customNext" onClick={goToNextSlide}>
          <img src={rightArr} alt="next" />
        </div>
      </Swiper>
    </section>
  );
}

export default Views;
