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
import deskline from '../../Assets/diamonds/diamond-desk-line.svg'
import mobline from '../../Assets/diamonds/diamond-mob-line.svg'
import "./diamondshop.css";

export default function DiamondShop() {
  const sliderImages = [
    { img: oval, title: "Oval" },
    { img: cushion, title: "Cushion" },
    { img: round, title: "Round" },
    { img: princess, title: "Princess" },
    { img: pear, title: "Pear" },
    { img: pear, title: "Pear" },
  ];

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    speed: 500,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
      <div className="diamond-slider  relative">
        <img src={deskline} className="hidden md:block mx-auto relative mt-52 w-full px-6"  alt="" />
        <img src={mobline} className="block md:hidden px-4 mt-[12rem]" alt="" />
        <Slider {...settings} className="xl:-mt-32 -mt-[6rem] md:-mt-[5.5rem] lg:-mt-[6.5rem] mx-auto max-w-[1250px]">
          {sliderImages.map(({ img, title }) => {
            return (
              <div className="text-center  h-full">
                <div className="!flex !justify-center  lg:mx-12 lg:my-10 slide-border rounded-full ">
                  <img src={img} alt="" className="lg:p-6 img-shadow" />
                </div>
                <div className="slide-title text-[12px] lg:text-[24px]">{title}</div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
