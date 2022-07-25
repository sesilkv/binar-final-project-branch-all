import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { Pagination, Navigation } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper
      height={500}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={-70}
        grabCursor={true}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320:{
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: -30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/images/img1.png" alt="imgbanner1" border="0" className="img-fluid"/></SwiperSlide>
        <SwiperSlide><img src="/images/img1.png" alt="imgbanner1" border="0" className="img-fluid"/></SwiperSlide>
        <SwiperSlide><img src="/images/img1.png" alt="imgbanner1" border="0" className="img-fluid"/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carousel