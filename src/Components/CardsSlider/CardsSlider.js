import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./cardsslider.css";

// import required modules
import { EffectCards } from "swiper/modules";

export default function CardsSlider({ data }) {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {data.map(({ img }) => {
        return (
          <SwiperSlide className="">
            <img src={img} className="w-full h-full object-cover" alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
