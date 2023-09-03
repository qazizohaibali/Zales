import React, { useState } from "react";
import star from "../../Assets/Cta/sub-cta-icon.png";
import "./category.css";
import CardsSlider from "../CardsSlider/CardsSlider";

import necklace1 from "../../Assets/category/necklaces/necklace1.jpg";
import necklace2 from "../../Assets/category/necklaces/necklace2.jpg";
import necklace3 from "../../Assets/category/necklaces/necklace3.jpg";
import necklace4 from "../../Assets/category/necklaces/necklace4.jpg";

import ring1 from "../../Assets/category/rings/ring1.jpg";
import ring2 from "../../Assets/category/rings/ring2.jpg";
import ring3 from "../../Assets/category/rings/ring3.jpg";
import ring4 from "../../Assets/category/rings/ring4.jpg";

import earring1 from "../../Assets/category/earrings/earring1.jpg";
import earring2 from "../../Assets/category/earrings/earring2.jpg";
import earring3 from "../../Assets/category/earrings/earring3.jpg";
import earring4 from "../../Assets/category/earrings/earring4.jpg";

export default function Category() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(true);
  const [active3, setActive3] = useState(false);

  const necklacedata = [
    { img: necklace1 },
    { img: necklace2 },
    { img: necklace3 },
    { img: necklace4 },
  ];
  const earringsdata = [
    { img: earring1 },
    { img: earring2 },
    { img: earring3 },
    { img: earring4 },
  ];
  const ringsdata = [
    { img: ring1 },
    { img: ring2 },
    { img: ring3 },
    { img: ring4 },
  ];

  const onActive1 = () => {
    if (!active1) {
      setActive1(true);
      setActive2(false);
      setActive3(false);
    }
  };

  const onActive2 = () => {
    if (!active2) {
      setActive2(true);
      setActive1(false);
      setActive3(false);
    }
  };

  const onActive3 = () => {
    if (!active3) {
      setActive3(true);
      setActive1(false);
      setActive2(false);
    }
  };
  return (
    <div>
      <div className="flex md:flex-row  md:items-center flex-col  category-heading text-white text-[48px] md:gap-5 lg:gap-10 md:text-[60px] lg:text-[80px] xl:text-[120px]">
        <span> Category </span>
        <span className="block md:hidden"> View </span>
        <div className="flex items-center justify-end md:justify-normal -mt-[60px] md:mt-10">
          <div className="h-16 border-[rgb(18,14,11)] border-2 bg-[#956d56] z-10 rounded-full w-16 flex justify-center items-center">
            <img src={star} className="h-12 w-12" alt="" />
          </div>
          <div className="h-14 w-14 -translate-x-7 bg-white rounded-full"></div>
        </div>
        <span className="hidden md:block"> View </span>
      </div>
      <div className="category-slider mt-3">
        {active1 ? <CardsSlider data={earringsdata} /> : null}
        {active2 ? <CardsSlider data={necklacedata} /> : null}
        {active3 ? <CardsSlider data={ringsdata} /> : null}
      </div>
      <div className="grid grid-cols-3 text-center mt-8">
        <div
          onClick={onActive1}
          className={`category-slide-title cursor-pointer flex items-center justify-center lg:text-[30px] md:text-[20px] text-[22px] text-white ${
            active1
              ? "lg:!text-[45px] md:!text-[30px] !text-[26px] font-bold opacity-100"
              : "opacity-50"
          }`}
        >
          {" "}
          Earrings
        </div>
        <div
          onClick={onActive2}
          className={`category-slide-title cursor-pointer flex items-center justify-center lg:text-[30px] md:text-[20px] text-[22px] text-white ${
            active2
              ? " lg:!text-[45px] md:!text-[30px] !text-[26px] font-bold opacity-100"
              : "opacity-50"
          }`}
        >
          Necklaces
        </div>
        <div
          onClick={onActive3}
          className={`category-slide-title cursor-pointer flex items-center justify-center lg:text-[30px] md:text-[20px] text-[22px] text-white ${
            active3
              ? " lg:!text-[45px] md:!text-[30px] !text-[26px] font-bold opacity-100"
              : "opacity-50"
          }`}
        >
          Weddings
        </div>
      </div>
    </div>
  );
}
