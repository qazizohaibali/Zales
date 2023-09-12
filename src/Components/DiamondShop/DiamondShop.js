import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import rightarrow from "../../Assets/icons/L-Next-Arrow.svg";
import Slider from "react-slick";
import oval from "../../Assets/diamonds/oval-diamond.png";
import cushion from "../../Assets/diamonds/cushion-diamond.png";
import round from "../../Assets/diamonds/round-diamond.png";
import princess from "../../Assets/diamonds/princess-diamond.png";
import pear from "../../Assets/diamonds/pear-diamond.png";
import deskline from "../../Assets/diamonds/diamond-desk-line.svg";
import mobline from "../../Assets/diamonds/diamond-mob-line.svg";
import "./diamondshop.css";

import arrowicon from "../../Assets/icons/L-Next-Arrow.svg";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function DiamondShop() {
  const sliderImages = [
    { img: oval, title: "Oval" },
    { img: cushion, title: "Cushion" },
    { img: round, title: "Round" },
    { img: princess, title: "Princess" },
    { img: pear, title: "Pear" },
    { img: pear, title: "Pear" },
  ];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="!absolute !top-[370px] lg:!top-[150px] !left-4 lg:!-left-16 rotate-180 h-10 w-10 hover:border-[1px] hover:border-white pl-2 rounded-full"
      >
        <Icon otherclasses="h-10 !hover:fill-black" icon={arrowicon} />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="!absolute !top-[370px] lg:!top-[150px] !right-4 lg:!-right-16 h-10 w-10 hover:border-[1px] hover:border-white pl-2 rounded-full"
      >
        <Icon otherclasses="h-10" icon={arrowicon} />
      </button>
    );
  };


  const settings = {
    arrows: false,
    infinite: true,
    arrows: true,
    centerMode: true,
    slidesToShow: 3,
    speed: 500,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-7">
      <div className="md:flex md:justify-between md:items-center">
        <p className="xl:text-[110px] md:text-[48px] lg:text-[70px] text-[40px] diamond-heading">
          Shop Diamond
        </p>
        <div className="flex -mt-28 right-0 md:mt-0 diamond-buttons absolute md:relative items-center">
          <Icon
            icon={rightarrow}
            otherclasses="flex hover:bg-transparent bg-white border-[1px]  pl-[10px] h-[50px] w-[50px] rounded-full items-center justify-between"
          ></Icon>
          <Button
            otherclasses=" h-[50px]"
            variant="primary"
            title="try it now"
          ></Button>
        </div>
      </div>
      <div className="md:flex md:justify-between md:items-center">
        <div className="md:hidden block xl:text-[110px] md:text-[48px] lg:text-[70px] text-[40px] diamond-heading">
          By Shape
        </div>
        <div className="max-w-[327px] mt-7 lg:mt-3 diamond-para">
          EXPLORED THE POSSIBILITES OF TAILORED CRAFTSMAN AND UNLIMITED
          CAPABILTITES
        </div>
        <div className="xl:text-[110px] md:text-[48px] lg:text-[70px] text-[40px] hidden md:block  diamond-heading">
          By Shape
        </div>
      </div>
      <div className="diamond-slider ">
        <Slider {...settings} className="mt-[100px] mx-auto max-w-[1140px]">
          {sliderImages.map(({ img, title }) => {
            return (
              <div className="text-center ">
                <div className="!flex !justify-center  lg:mx-12  slide-border rounded-full ">
                  <img
                    src={img}
                    alt=""
                    className="lg:p-6 h-[200px] w-[200px]"
                  />
                </div>
                <div className="slide-title text-[12px] lg:text-[24px]">
                  {title}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
