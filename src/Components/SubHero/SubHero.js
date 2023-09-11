import React, { useState } from "react";
import model1 from "../../Assets/models/model-1.jpg";
import model2 from "../../Assets/models/model-2.jpg";
import model3 from "../../Assets/models/model-3.jpg";
import ring from "../../Assets/ring.png";
import "./subhero.css";

import leftarrow from "../../Assets/icons/left-arrow.svg";
import rightarrow from "../../Assets/icons/right-arow.svg";

import subHeroimg from "../../Assets/subheroicon.png";

const models = [{ img: model1 }, { img: model2 }, { img: model3 }];

const ringsdata = [
  {
    step: "Design Your Own Gemstone Ring ",
  },
  { step: "(1) Pick your gemstone and ring base" },
  { step: "(2) Securely set the dazzling gemstone" },
  { step: "(3) Finalize for elegant and chic design" },
  { step: "(4) Capture images, showcase its beauty" },
  { step: "(5) Capture images, showcase its beauty" },
];

export default function SubHero() {
  const [slide, setSlide] = useState(0);
  const [btn, setBtn] = useState();

  const collectionSlidePlus = () => {
    if (slide < 4)
      setSlide((prev) => {
        return prev + 1;
      });
    if (slide === 4) setBtn(true);
  };
  const collectionSlideMinus = () => {
    if (slide > 0)
      setSlide((prev) => {
        return prev - 1;
      });
    if (slide === 0) setBtn(false);
  };

  return (
    <div className="flex lg:flex-row flex-col text-white lg:px-0 px-3 gap-4 my-3">
      <div className="max-w-[900px] w-full flex flex-col-reverse gap-5 py-5 items-center md:flex-row md:items-center bg-[#1d1d1d] rounded-3xl">
        <div className="flex">
          <div
            className="flex items-center z-20 bg-[#1d1d1d] "
            style={{ borderRadius: "1.5rem 0rem 0rem 1.5rem" }}
          >
            <div className="bg-[#926a55] flex  items-center justify-center rounded-full h-24 w-24 lg:h-36 lg:w-36">
              <div className="backdrop-blur-[20px] relative w-12 h-12 lg:w-16 lg:h-16 flex justify-center items-center rounded-full translate-x-[42px] lg:translate-x-[65px] opacity-100">
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
            <img
              src={subHeroimg}
              className="lg:-ml-[130px] -ml-[88px] w-20 h-20 lg:h-28 lg:w-28"
              alt=""
            />
          </div>
          <div className="bg-white h-24 w-24 lg:h-36 lg:w-36 rounded-full justify-end flex items-center -translate-x-9  lg:-translate-x-14">
            <img
              src={ring}
              className="lg:translate-x-[25px] translate-x-[17px] -rotate-[80deg]"
              alt=""
            />
          </div>
        </div>
        <div className="space-y-3 px-5 text-center">
          <p className="subhero-ring-title text-[20px] md:text-[26px]">Make Your Ring In Just 4 Steps</p>
          <p className="subhero-ring-step text-[20px] ">{ringsdata[slide].step}</p>
        </div>
      </div>
      <div className="lg:max-w-[500px] flex flex-col md:flex-row lg:flex-col md:items-center w-full bg-[#926a55] rounded-3xl p-[20px] ">
        <h2 className="text-[18px] mb-3 md:text-[24px] italic subhero-count-heading">
          Users and Supportive Community
        </h2>
        <div className="mt-3 gap-4 flex justify-between items-center">
          <p className="md:text-[70px] text-[55px] subhero-count ">4.8k</p>
          <div className="flex sub-hero-model-images">
            {models.map(({ img }) => {
              return (
                <img
                  src={img}
                  className="lg:h-20 h-16 rounded-full grayscale-[50%]"
                  style={{ border: "2px solid white" }}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
