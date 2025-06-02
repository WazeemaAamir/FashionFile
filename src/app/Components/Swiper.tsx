"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ImageSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/whatsApp-women1.jpg" alt="Slide 1" className="w-full h-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/whatsApp-women2.jpg" alt="Slide 2" className="w-full h-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/whatsApp-women3.jpg" alt="Slide 3" className="w-full h-auto" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
