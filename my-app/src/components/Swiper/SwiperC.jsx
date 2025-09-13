import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import data from "../../../db.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

const SwiperC = ({ initialIndex = 0 }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}
        navigation={true}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="mainSwiper"
        initialSlide={initialIndex}
      >
        {data.shopPage.map((item) => {
          return (
            <SwiperSlide className="bg-[#cc9a65c6]">
              <img
                src={`/img/${item.img}`}
                alt={item.title}
                className="w-full h-[500px] object-contain"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/*  thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="thumbsSwiper mt-4"
      >
        {data.shopPage.map((item) => {
          return (
            <SwiperSlide>
              <img
                src={`/img/${item.img}`}
                alt="thumb"
                className="cursor-pointer"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperC;
