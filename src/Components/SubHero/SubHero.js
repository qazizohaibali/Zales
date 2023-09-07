import React, { useState } from "react";
import model1 from "../../Assets/models/model-1.jpg";
import model2 from "../../Assets/models/model-2.jpg";
import model3 from "../../Assets/models/model-3.jpg";
import ring from "../../Assets/ring.png";

import leftarrow from "../../Assets/icons/left-arrow.svg";
import rightarrow from "../../Assets/icons/right-arow.svg";

const models = [{ img: model1 }, { img: model2 }, { img: model3 }];

const ringsdata = [
  {
    title: "Make Your Ring In Just 4 Steps",
    step: "Design Your Own Gemstone Ring ",
  },
  { step: "Pick gemstone and ring base" },
  { step: "Securely set the dazzling gemstone" },
  { step: "Finalize for elegant and chic design" },
  { step: "Capture images, showcase its beauty" },
  { step: "Capture images, showcase its beauty" },
];

export default function SubHero() {
  const [slide, setSlide] = useState(0);
  const [btn, setBtn] = useState();

  const collectionSlidePlus = () => {
    if (slide < 4) setSlide(slide + 1);
    if (slide === 4) setBtn(true);
  };
  const collectionSlideMinus = () => {
    if (slide > 0) setSlide(slide - 1);
    if (slide === 0) setBtn(false);
  };

  return (
    <div className="flex lg:flex-row flex-col text-white lg:px-0 px-3">
      <div className="max-w-[900px] w-full flex items-center bg-[#1d1d1d] rounded-3xl">
        <div
          className="flex items-center bg-[#1d1d1d] z-[1000]"
          style={{ borderRadius: "1.5rem 0rem 0rem 1.5rem" }}
        >
          <div className="bg-[#926a55] flex items-center justify-center rounded-full h-24 w-24 lg:h-36 lg:w-36">
            <div className="backdrop-blur-[20px] rounded-full translate-x-[42px] lg:translate-x-[70px] opacity-100">
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
        </div>
        <div className="bg-white h-24 w-24 lg:h-36 lg:w-36 rounded-full justify-end flex items-center -translate-x-9  lg:-translate-x-16">
          <img
            src={ring}
            className="lg:translate-x-1 translate-x-[4px]"
            alt=""
          />
        </div>
        <div className="">
          {slide === 0 ? <h2>{ringsdata[slide].title}</h2> : null}
          <p>{ringsdata[slide].step}</p>
        </div>
      </div>
      <div className="max-w-[500px] w-full bg-[#926a55] rounded-3xl p-[30px] ">
        <h2 className="text-[18px] mb-3">
          <em>Users and Supportive Community</em>
        </h2>
        <div className="mt-3 flex justify-between items-center">
          <p className="text-[50px]">4.8k</p>
          <div className="flex">
            {models.map(({ img }) => {
              return (
                <img
                  src={img}
                  className="h-20 rounded-full grayscale-[50%]"
                  style={{ border: "4px solid white" }}
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
