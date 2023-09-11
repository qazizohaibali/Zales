import React from "react";
import bg from "../../Assets/Cta/cta-bg.png";
import Button from "../Button/Button";
import "./cta.css";

export default function Cta() {
  return (
    <div className="flex justify-center pt-[80px] pb-[130px] lg:pt-[100px] lg:pb-[180px]">
      <div className="mx-auto">
        <img
          src={bg}
          className="relative  min-h-[400px] max-h-[600px] object-cover lg:w-[1050px] rounded-2xl filter brightness-[0.3]"
          alt=""
        />
        <div className="relative -mt-[370px] md:-mt-[440px] lg:-mt-[540px]">
          <div className="text-center cta-heading font-extrabold text-white text-[30px] md:text-[40px]  lg:text-[50px]">
            Want to design for own ? <br className="hidden md:block" /> calm, we can do it!
          </div>
          <div className="text-[90px] text-center md:my-8 cta-bg-text font-extrabold text-white opacity-10">
            ZALES
          </div>
          <div className="">
            <Button
              variant="primary"
              title="Order Now!"
              otherclasses="py-2 mx-auto md:mt-12 italic max-w-[200px] text-center"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
