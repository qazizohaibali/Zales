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
import img7 from "../../Assets/works/img7.png";
import img8 from "../../Assets/works/img8.png";
import img9 from "../../Assets/works/img9.png";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function OurWorks() {
  const work_images = [
    { img: img4 },
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img5 },
    { img: img9 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
  ];

  const swiper = {
    breakpoints: {
      320: {
        slidesPerView: 2,
        coverflowEffect:{
          stretch: 10,
          // rotate:0
        }
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <div className=" ">
      <div className="flex lg:flex-row  lg:items-center flex-col-reverse lg:gap-6 relative lg:translate-y-[70px]">
        <div className="text-white italic flex items-end md:max-w-[400px]  lg:max-w-[210px] ourwork-para">
          Zales combination of statements and simplistic style helps create a
          look that's as unique as you are
        </div>
        <div className="ourwork-heading text-white text-[48px] md:text-[55px] lg:text-[80px] xl:text-[100px]">
          OUR WORKS
        </div>
      </div>
      <div className="relative owner_gallery_wrapper px-3">
        <Swiper
          {...swiper}
          effect={"coverflow"}
          // grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 5,
            stretch: 5,
            depth: 100,
            modifier: 2.5,
          }}
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
                <img src={img} className="rounded-[10px]" alt="slide_image" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
