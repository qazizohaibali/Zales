import React, { useState } from "react";
import SubHome from '../SubHero/SubHero.js'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";


import pic1 from "../../Assets/pic1.jpg";
import pic2 from "../../Assets/pic2.jpg";
import pic3 from "../../Assets/pic3.jpg";
import pic4 from "../../Assets/pic4.jpg";
import pic5 from "../../Assets/pic5.jpg";

import Button from "../Button/Button";
import Icon from "../Icon/Icon";

// import left from "../../Assets/icons/left-arrow.svg";
// import right from "../../Assets/icons/right-arow.svg";

import arrowicon from '../../Assets/icons/L-Next-Arrow.svg'

export default function Home() {
  const homeData = [
    {
      img: pic1,
      text: "Each piece is meticulously crafted to reflect your exceptional taste because you deserve nothing less than the most unique adornments",
      heading: "Express your personal style with exceptional jewelry",
      barValue: 25,
    },
    {
      img: pic2,
      text: "Your individuality deserves to be celebrated and adorned with the most exquisite jewelry. Step into a world of exclusivity at ZALES",
      heading: "Embrace your uniqueness with our handcrafted pieces",
      barValue: 50,
    },
    {
      img: pic3,
      text: "Unleash your inner radiance with our unparalleled collection of distinctive jewelry. Elevate your style and celebrate your uniqueness",
      heading: "Indulge in the allure of rare and remarkable jewelry",
      barValue: 75,
    },
    {
      img: pic4,
      text: "Explore our exquisite selection of one-of-a-kind jewelry, meticulously crafted for individuals who deserve the extraordinary",
      heading: "Celebrate your individuality with exquisite collection",
      barValue: 100,
    },
  ];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[20px] lg:bottom-[80px] px-2 py-1 rotate-180 z-[1000] icon_border right-[53%] lg:right-[11%] "
      >
        <Icon otherclasses="h-10" icon={arrowicon} />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[20px]  lg:bottom-[80px] px-2 py-1 icon_border z-[1000] left-[53%] lg:left-[90%] "
      >
        <Icon  otherclasses="h-10" icon={arrowicon} />
      </button>
    );
  };

  const settings = {
    // infinite: true,
    speed: 1000,
    fade: true,
    infinite: false,
    slidesToShow: 1,
    arrows: true,
    autoplay: false,
    slidesToScroll: 1,
    adaptiveHeight: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative">
      <div className="Home-Component mt-3 lg:mx-0 mx-3 ">
        <Slider {...settings}>
          {homeData.map(({ img, text, heading, barValue }, index) => {
            return (
              <div className="relative">
                <img
                  src={img}
                  alt=""
                  className="lg:h-[750px] grayscale-[30%] h-[640px] object-cover w-full rounded-3xl "
                />
                <div className="absolute top-[150px] lg:top-[170px] lg:pl-[80px]">
                  <div className="">
                    <h1 className="text py-[10px] opacity-70 text-white text-[16px] lg:text-[20px] lg:px-0 px-2 max-w-[280px] lg:max-w-[550px]">
                      {text}
                    </h1>
                    <h6 className="heading py-[10px] font-bold text-white text-[20px] lg:px-0 px-3 lg:text-[50px] lg:max-w-[800px] max-w-[320px]">
                      {heading}
                    </h6>
                  </div>
                  <div className="flex relative flex-col mx-3 lg:flex-row gap-4 mt-[40px] lg:mt-[60px] max-w-[150px] lg:max-w-full">
                    {/* <Button
                      title="Order Now"
                      variant="secondary"
                      otherclasses=""
                    />
                    <Button
                      title="See Collections"
                      variant="primary"
                      otherclasses=""
                    /> */}
                   
                  </div>
                  <div className="flex flex-col progress-bar justify-between items-end h-[220px] -mr-[75px] md:-mr-[450px] lg:-mr-[470px] -mt-[340px] ">
                    <p className="text-white mr-[70px] text-[20px] font-bold">{`0${index + 1}`}</p>
                    <progress
                      className="rotate-90"
                      max="100"
                      value={barValue}
                    ></progress>
                    <p className="text-white mr-[70px] text-[20px] font-bold">04</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      
       <SubHome/>
    </div>
  );
}
