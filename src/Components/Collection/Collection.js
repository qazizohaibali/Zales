import React, { useState } from "react";
import "./collection.css";

import img1 from "../../Assets/collections/necklace1.png";
import img2 from "../../Assets/collections/necklace2.png";
import img3 from "../../Assets/collections/necklace3.png";
import img4 from "../../Assets/collections/necklace4.png";
import img5 from "../../Assets/collections/necklace5.png";

import icon from "../../Assets/collections/sun-icons/icon-1.png";
import icon1 from "../../Assets/collections/sun-icons/icon1.png";
import icon2 from "../../Assets/collections/sun-icons/icon2.png";

import leftarrow from "../../Assets/icons/left-arrow.svg";
import rightarrow from "../../Assets/icons/right-arow.svg";
import UnActiveBtn from "../CollectionButtons/UnActiveBtn";

export default function Collection() {
  const [slide, setSlide] = useState(0);
  const [btn, setBtn] = useState();
  const [progress, setProgress] = useState(0);

  const collectionImages = [
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
  ];

  const collectionSlidePlus = () => {
    if (slide < 4) setSlide(slide + 1);
    if (slide < 4) setProgress(progress + 25);
    if (slide === 4) setBtn(true);
  };
  const collectionSlideMinus = () => {
    if (slide > 0) setSlide(slide - 1);
    if (slide > 0) setProgress(progress - 25);
    if (slide === 0) setBtn(false);
  };

  return (
    <div className="">
      <div>
        <div className="flex flex-col md:flex-row md:items-center  md:gap-16 ">
          <div className="collection-heading xl:text-[110px]  md:text-[48px] lg:text-[70px] text-[40px]">
            NEW
          </div>
          <div className="collection-heading md:hidden block text-right xl:text-[110px] md:text-[48px] lg:text-[70px] text-[40px]">
            COLLECTION
          </div>
          <div className="collection-para max-w-[400px] mt-4 md:mt-2 text-[20px]">
            <span>Zales's combination of</span> <br /> statement and simplistics
            style help create a look that's as unique as you are
          </div>
        </div>
        <div className="collection-heading text-right justify-end xl:text-[110px] hidden md:block md:text-[48px] lg:text-[70px] text-[40px]">
          COLLECTION
        </div>
      </div>
      <div className="flex lg:flex-row  text-white  flex-col">
        <div
          className="lg:w-[60%] w-full flex flex-col items-center
          "
        >
          <img
            src={collectionImages[slide].img}
            alt=""
            className="ease-in-out delay-300 rounded-[50px]  transition w-full"
          />
          <div className="collection-arrow-bg rounded-full flex justify-between lg:hidden -mt-[30px] w-[90px] h-[90px]">
            <div
              onClick={collectionSlidePlus}
              className={` ${
                btn ? "hidden" : "block mx-auto my-auto cursor-pointer"
              }`}
            >
              <img src={rightarrow} alt="" className="w-10" />
            </div>
            <div
              onClick={collectionSlideMinus}
              className={` ${
                btn ? "block mx-auto my-auto cursor-pointer" : "hidden"
              }`}
            >
              <img src={leftarrow} alt="" className="w-10" />
            </div>
          </div>
        </div>
        <progress
          className="w-full my-8 block md:hidden collectionprogressbar"
          max="100"
          value={progress}
        ></progress>
        <div className="lg:w-[40%] w-full space-y-9">
          <div className="bg-[#1b1713] flex flex-col justify-center h-full px-6  rounded-[50px] space-y-[30px]">
            <div className="pt-4 lg:pt-0">
              <div className="flex gap-2 items-center">
                <img src={icon} className="max-w-[50px] max-h-[50px]" alt="" />
                <div className="collection-date text-[18px]">
                  <span className="opacity-60">From: </span>Classic Set 2023
                </div>
              </div>
              <div className="collection-sub-heading capitalize lg:text-[25px] xl:text-[30px] xl:pr-[80px] text-[23px]">
                Introducing the zales lesedi la rona
              </div>
              <div className="collection-sub-title text-[#62493A] text-[22px]">
                A Record Breaking Jewel
              </div>
              <div className="collection-sub-para opacity-60">
                The 302.37 Carat Zales Lesedi La Rona Is The Bestes Highest
                Colour, Highest Clarity Diamond Ever Certified By The GIA, And
                The World's Largest Square Emerald Cut Diamond, Expertly Cut And
                Polished By Graff's World Leading Team Of Gemmologists And
                Master Polishers. This Rare Marvel Required Over 18 Months Of
                Meticulous Craftsmanship, And... Read More
              </div>
            </div>
            <div className="collection-arrow-bg rounded-full lg:flex hidden   lg:justify-between -ml-[70px] w-[90px] h-[90px]">
              <div
                onClick={collectionSlidePlus}
                className={` ${
                  btn ? "hidden" : "block mx-auto my-auto cursor-pointer"
                }`}
              >
                <img src={rightarrow} alt="" className="w-10" />
              </div>
              <div
                onClick={collectionSlideMinus}
                className={` ${
                  btn ? "block mx-auto my-auto cursor-pointer" : "hidden"
                }`}
              >
                <img src={leftarrow} alt="" className="w-10" />
              </div>
            </div>
            <div className="pb-4 lg:pb-0 collection-lines text-[18px] font-medium">
              <div className="flex items-center gap-2">
                <img src={icon} className="max-w-[50px] max-h-[50px]" alt="" />
                <div>Expert Analysis</div>
              </div>
              <div className="flex items-center gap-2">
                <img src={icon} className="max-w-[50px] max-h-[50px]" alt="" />
                <div>A Sensational Results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <progress
        className="w-full my-8 collectionprogressbar hidden md:block"
        max="100"
        value={progress}
      ></progress>
      <div className="flex lg:flex-row flex-col gap-6 md:gap-0 justify-between">
        <div className="space-y-5 lg:space-y-0">
          <div className="flex items-end gap-3">
            <img src={icon1} className="max-w-[100px] max-h-[100px]" alt="" />
            <img src={icon2} className="max-w-[60px] max-h-[60px]" alt="" />
          </div>
          <div className="collection-para  text-[20px] max-w-[400px] text-white mx-auto md:mx-0">
            <span>zales's combination of</span>
            <br /> statement and simplistics style help create a look that's as
            unique as you are
          </div>
        </div>
        <div className="my-auto space-y-5 pt-4 hidden md:block">
          <div className="flex flex-row  gap-4">
            <UnActiveBtn label="Classic Set" />
            <UnActiveBtn label="The Butterfly" />
            <UnActiveBtn label="Laurence Graff Signature" />
            <UnActiveBtn label="Wild Flower" />
          </div>
          <div className="flex gap-4 justify-end">
            <UnActiveBtn label="Icon" />
            <UnActiveBtn label="Main Jewellery" />
            <UnActiveBtn label="Gold Expression" />
            <UnActiveBtn label="Classic Set" active={true} />
          </div>
        </div>
        <div className="block md:hidden space-y-5">
          <div className="flex justify-start">
            <UnActiveBtn label="Classic Set" active={true} />
            <UnActiveBtn label="Wild Flower" />
          </div>
          <div className="flex justify-end">
            <UnActiveBtn label="The Butterfly" />
            <UnActiveBtn label="Gold Expression" />
          </div>
          <div className="flex justify-start">
            <UnActiveBtn label="Laurence Graff Signature" />
            <UnActiveBtn label="Icon" />
          </div>
          <div className="flex justify-end">
            <UnActiveBtn label="Main Jewellery" />
            <UnActiveBtn label="Classic Set" />
          </div>
        </div>
      </div>
    </div>
  );
}
