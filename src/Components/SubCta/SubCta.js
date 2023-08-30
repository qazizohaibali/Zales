import React from "react";
import "./subcta.css";
import star from "../../Assets/Cta/sub-cta-icon.png";
import arrow from "../../Assets/icons/right-arrow-color.svg";
import UnActiveBtn from "../CollectionButtons/UnActiveBtn";
export default function SubCta() {
  return (
    <div className="">
      <div className="text-[white]">
        <div className="subcta-heading text-[30px] lg:text-[70px] font-bold">
          GET The Latest Information from US
        </div>
        <div className="flex items-center">
          <div className="h-16 border-[rgb(18,14,11)] border-2 bg-[#956d56] z-10 rounded-full w-16 flex justify-center items-center">
            <img src={star} className="h-12 w-12" alt="" />
          </div>
          <div className="h-14 w-14 -translate-x-7 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="mt-[70px] mb-[80px] flex md:flex-row flex-col md:justify-between ">
        <div className="pl-3 bg-[#282626] rounded-[50px] w-[50%] flex  justify-between items-center">
          <input
            type="search"
            placeholder="Enter Your Email"
            className="!outline-none w-full bg-[#282626] pl-7 text-[20px] italic border text-[white] !border-none"
          />
          <div className="mr-2 cursor-pointer h-14 w-14 rounded-full bg-white flex justify-center items-center">
            <img src={arrow} alt="" className="h-6 w-6" />
          </div>
        </div>
        <div className="max-w-[320px] text-white">
          Be the first to know about exciting new designs, special events, store
          openings and much more.
        </div>
      </div>
      <div>
        <div className="footer-line h-[2px]">

        </div>
        <div className="lg:flex-row flex-col flex lg:justify-between mt-4">
            <div className="lg:order-1 order-2 text-white">
                <div>Develoed by Qazi Zohaib Ali</div>
                @2023, All Rights Reserved.
            </div>
            <div className="grid lg:grid-cols-6 grid-cols-2 lg:order-2 order-1">
                <UnActiveBtn label="Pinterest" />
                <UnActiveBtn label="Facebook" />
                <UnActiveBtn label="Twitter" />
                <UnActiveBtn label="Youtube" />
                <UnActiveBtn label="Instagram" />
                <UnActiveBtn label="Thread" />
            </div>
        </div>
      </div>
    </div>
  );
}
