import React from "react";
import "./owrworks.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../../Assets/works/img1.png";
import img2 from "../../Assets/works/img5.png";
import img3 from "../../Assets/works/img6.png";
import img4 from "../../Assets/works/img4.png";
import img5 from "../../Assets/works/img2.png";
import img6 from "../../Assets/works/img3.png";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function OurWorks() {
  const work_images = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
  ];

  return (
    <div className=" ">
      <div className="flex md:flex-row  md:items-center flex-col-reverse gap-3">
        <div className="text-white italic flex items-end max-w-[133px] ourwork-para">
          Zales combination of statements and simplistic style helps create a
          look that's as unique as you are
        </div>
        <div className="ourwork-heading text-white text-[48px] md:text-[60px] lg:text-[80px] xl:text-[90px]">OUR WORKS</div>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {work_images.map(({ img }) => {
          return (
            <SwiperSlide className="flex justify-center items-center">
              <img
                src={img}
                className="max-w-[300px] max-h-[400px]"
                alt="slide_image"
              />
            </SwiperSlide>
          );
        })}

        {/* <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div> */}
      </Swiper>
    </div>
  );
}
