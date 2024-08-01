"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Brand from "@/public/images/brand1.png";
import Brand2 from "@/public/images/brand2.png";
import Brand3 from "@/public/images/brand3.png";
import Brand4 from "@/public/images/brand4.png";
import Brand5 from "@/public/images/brand5.png";
export default function App() {
  const logos = [Brand, Brand2, Brand3, Brand4, Brand5];
  return (
    <div className="bg-custom-gray pt-[40px] pb-[40px]">
      <div className="container">
        <div className="flex justify-center">
          <div className="card flex items-center max-w-[1240px] w-full h-[154px] bg-white rounded-[8px]">
            <Swiper
              slidesPerView={7}
              centeredSlides={true}
              spaceBetween={10}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={3000}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {logos.concat(logos)?.map((logo, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={`Logo ${index}`}
                    className="w-24 h-24 object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
