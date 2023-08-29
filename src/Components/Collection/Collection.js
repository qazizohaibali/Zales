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
      <div className="flex lg:flex-row text-white  flex-col">
        <div className="lg:w-[60%] w-full ">
          <img
            src={collectionImages[slide].img}
            alt=""
            className="ease-in-out delay-300 rounded-[50px]  transition w-full"
          />
        </div>
        <div className="lg:w-[40%] w-full space-y-9">
          <div className="bg-[#1b1713] flex flex-col justify-center h-full px-6  rounded-[50px] space-y-[30px]">
            <div>
              <div className="flex gap-2 items-center">
                <img src={icon} className="max-w-[50px] max-h-[50px]" alt="" />
                <div>
                  <span>From :</span>Classic Set 2023
                </div>
              </div>
              <div className="collection-sub-heading capitalize">
                Introducing the zales lesedi la rona
              </div>
              <div className="collection-sub-title">
                A Record Breaking Jewel
              </div>
              <div className="collection-sub-para">
                The 302.37 Carat Zales Lesedi La Rona Is The Bestes Highest
                Colour, Highest Clarity Diamond Ever Certified By The GIA, And
                The World's Largest Square Emerald Cut Diamond, Expertly Cut And
                Polished By Graff's World Leading Team Of Gemmologists And
                Master Polishers. This Rare Marvel Required Over 18 Months Of
                Meticulous Craftsmanship, And... Read More
              </div>
            </div>
            <div className="collection-arrow-bg rounded-full flex justify-between -ml-[70px] w-[90px] h-[90px]">
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
            <div>
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
        className=" mt-6 w-full collectionprogressbar"
        max="100"
        value={progress}
      ></progress>
      <div className="flex justify-between">
        <div>
          <div className="flex items-end gap-3">
            <img src={icon1} className="max-w-[100px] max-h-[100px]" alt="" />
            <img src={icon2} className="max-w-[60px] max-h-[60px]" alt="" />
          </div>
          <div className="max-w-[300px] text-white">
            <span>zales's combination of</span>
            <br /> statement and simplistics style help create a look that's as
            unique as you are
          </div>
        </div>
        <div className="my-auto space-y-5 pt-4">
          <div className="flex gap-4">
            <UnActiveBtn label="Classic Set" />
            <UnActiveBtn label="The Butterfly" />
            <UnActiveBtn label="Laurence Graff Signature" />
            <UnActiveBtn label="Wild Flower" />
          </div>
          <div className="flex gap-4">
            <UnActiveBtn label="Icon" />
            <UnActiveBtn label="Main Jewellery" />
            <UnActiveBtn label="Gold Expression" />
            <UnActiveBtn label="Classic Set" active={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
