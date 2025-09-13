import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../../db.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Button from "../Button/Button";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      effect="fade"
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      speed={2000}
      loop={true}
    >
      {data.slider?.map((item, i) => (
        <SwiperSlide key={i}>
          <div
            className="md:h-[900px] h-[650px] bg-cover bg-center flex flex-col justify-center items-center text-white"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <h2 className="md:text-5xl text-3xl font-medium uppercase">
              {item.title}
            </h2>
            <p className="md:text-lg text-md w-full max-w-[500px] text-center mt-[10px] mb-[44px]">
              {item.subtitle}
            </p>
            <Button to={item.link} text="View More" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
