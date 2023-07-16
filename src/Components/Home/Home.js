import React, { useState } from "react";
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

import left from "../../Assets/icons/left-arrow.svg";
import right from "../../Assets/icons/right-arow.svg";

export default function Home() {
  const homeData = [
    {
      img: pic1,
      text: "Each piece is meticulously crafted to reflect your exceptional taste because you deserve nothing less than the most unique adornments",
      heading: "Express your personal style with exceptional jewelry",
      barValue:20
    },
    {
      img: pic2,
      text: "Your individuality deserves to be celebrated and adorned with the most exquisite jewelry. Step into a world of exclusivity at ZALES",
      heading: "Embrace your uniqueness with our handcrafted pieces",
      barValue:40
    },
    {
      img: pic3,
      text: "Unleash your inner radiance with our unparalleled collection of distinctive jewelry. Elevate your style and celebrate your uniqueness",
      heading: "Indulge in the allure of rare and remarkable jewelry",
      barValue:60
    },
    {
      img: pic4,
      text: "Explore our exquisite selection of one-of-a-kind jewelry, meticulously crafted for individuals who deserve the extraordinary",
      heading: "Celebrate your individuality with exquisite collection",
      barValue:80
    },
    // {
    //   img: pic5,
    //   text: "meticulously crafted for individuals who deserve the extraordinary",
    //   heading:
    //     "meticulously crafted for individuals who deserve the extraordinary",
    //     barValue:100
    //   },
  ];

  const PrevArrow = (props) => {
    // barDecrease()
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[130px] z-[1000] icon_border right-[11%] "
      >
        <Icon iconHeight={40} iconWidth={40} icon={left} />
      </button>
    );
  };

  const NextArrow = (props) => {
    // barIncrease()
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[130px] icon_border z-[1000] left-[90%] "
      >
        <Icon iconWidth="100px" iconHeight="70px" icon={right} />
      </button>
    );
  };

  const settings = {
    // infinite: true,
    speed: 1000,
    fade: true,
    infinite:false,
    slidesToShow: 1,
    arrows: true,
    autoplay: false,
    slidesToScroll: 1,
    adaptiveHeight: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [value, setValue] = useState(20);
  // const [slide, setSlide] = useState(0);

  // const barIncrease = () => {
  //   if (value < 100) {
  //     let updatedvalue = value + 20;
  //     setValue(updatedvalue);
  //   }
  // };
  // const barDecrease = () => {
  //   if (value >= 0) {
  //     let updatedvalue = value - 20;
  //     setValue(updatedvalue);
  //   }
  // };

  // const prevslide = () => {
  //   let newslide = slide - 1;
  //   if (slide > 0) {
  //     setSlide(newslide);
  //     console.log(slide);
  //     barDecrease();
  //   }
  // };

  // const nextslide = () => {
  //   let newslide = slide + 1;
  //   if (slide < 4) {
  //     setSlide(newslide);
  //     console.log(slide);
  //     barIncrease();
  //   }
  // };

  return (
    <div>
      <div className="Home-Component mt-3 mx-3 ">
        <Slider {...settings}>
          {homeData.map(({ img, text, heading,barValue },index) => {
            return (
              <div className="relative">
                <img src={img} alt="" className="max-h-[700px] object-cover w-full rounded-3xl " />
                <div className="absolute top-[200px] lg:pl-[80px]">
                  <div className="">
                  <h1 className="text py-[10px] text-white text-[20px] max-w-[550px]">{text}</h1>
                  <h6 className="heading py-[10px] font-bold text-white text-[50px] max-w-[800px]">{heading}</h6>
                  </div>
                  <div className="flex gap-4 mt-[60px]">
                    <Button title="Order Now" variant="secondary" />
                    <Button title="See Collection" variant="primary" />
                  </div>
                  {/* <div className="flex justify-end"> */}
                  {/* <div className="flex flex-col items-end  justify-end -mr-[510px]  -mt-[300px] ">
                    <p className="text-white -top-[200px] ">01</p>
                    <progress className="rotate-90 " max="100" value={barValue} ></progress>
                    <p className="text-white ">{`0${index+1}`}</p>
                  </div> */}
                  {/* </div> */}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

// <div className="relative">
// <img
//   src={img}
//   className="relative max-h-[600px] object-cover w-full"
//   alt=""
// />

// <div className="absolute top-[400px]">

//   <h6>{heading}</h6>
//   <h1 className="">{text}</h1>

//   <div>
//     <div className="flex">
//       <Button title="Order Now" variant="secondary" />
//       <Button title="See Collection" variant="primary" />
//     </div>
//     <div className="flex justify-between max-w-[120px]">
//       <button onClick={prevslide} variant="primary">
//         <img
//           src={left}
//           className="h-8 arrow rounded-full px-2"
//           alt="left arrow"
//         />
//       </button>
//       <button onClick={nextslide} variant="primary">
//         <img
//           src={right}
//           className="h-8 arrow rounded-full px-2"
//           alt="right arrow"
//         />
//       </button>
//     </div>
//     <div className="flex flex-col -mt-[300px]">
//       <p>01</p>
//     <progress className="" max="100" value={value}></progress>
//     <p>02</p>
//   </div>
//   </div>

// </div>
// </div>
