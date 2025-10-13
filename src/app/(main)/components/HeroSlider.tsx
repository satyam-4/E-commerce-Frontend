"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  const slides = [1, 2, 3, 4, 5];

  return (
    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    slidesPerView={2}
    centeredSlides={true}
    spaceBetween={0}
    pagination={{ clickable: true }}
    autoplay={{ delay: 5000 }}
    loop
    >
      {
        slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="w-[700px] h-[350px] bg-zinc-300 flex items-center justify-center">
              <h1 className="text-6xl font-bold text-zinc-500">700 x 350</h1>
            </div>
          </SwiperSlide>
        ))
      }

    </Swiper>
  )
}
