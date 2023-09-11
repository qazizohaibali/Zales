import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import img1 from "../../Assets/works/img1.png";
import img2 from "../../Assets/works/img5.png";
import img3 from "../../Assets/works/img6.png";
import img4 from "../../Assets/works/img4.png";
import img5 from "../../Assets/works/img2.png";
import img6 from "../../Assets/works/img3.png";
import img7 from "../../Assets/works/img7.png";
import img8 from "../../Assets/works/img8.png";

export default function SwiperSlider() {
  const imageGallery = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
    {
      img: img7,
    },
    {
      img: img8,
    },
  ];

  return (
    <div className="relative owner_gallery_wrapper">
      <Swiper
    //   {/* {...swiper} */}
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
        {imageGallery.map(({img}, index) => {
          return (
            <SwiperSlide key={index}>
             <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
        <div className="swiper-button-prev after:!hidden absolute !translate-y-[-50%] !top-2/4 lg:!left-20 xl:!left-[120px] !w-12 !h-12">
          {/* <Icon icon="arrow-left-gallery-icon" iconHeight={48} iconWidth={48} /> */}
        </div>
        <div className="swiper-button-next after:!hidden absolute !translate-y-[-50%] !top-2/4 lg:!right-20 xl:!right-[120px] !w-12 !h-12">
          {/* <Icon
            icon="arrow-left-gallery-icon"
            iconHeight={48}
            iconWidth={48}
            otherClasses="rotate-180"
          /> */}
        </div>
      </Swiper>
    </div>
  );
}
