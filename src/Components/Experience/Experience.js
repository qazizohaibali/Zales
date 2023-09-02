import React from "react";
import "./experience.css";
import Slider from "react-slick";

import model1 from "../../Assets/models/model1.png";
import model2 from "../../Assets/models/model2.png";
import model3 from "../../Assets/models/model3.png";
import model4 from "../../Assets/models/model4.png";
import model5 from "../../Assets/models/model5.png";
import model6 from "../../Assets/models/model6.png";
import model7 from "../../Assets/models/model7.png";
import model8 from "../../Assets/models/model8.png";
import model9 from "../../Assets/models/model9.png";

export default function Experience() {
  const firstslidermodels = [
    {
      img: model1,
      review: "The Quality of the jewellery is excellent, I'll buy again",
      name: "Mila Kate",
    },
    {
      img: model2,
      review: "The Quality of the jewellery is excellent, I'll buy again",
      name: "Ava Claire",
    },
    {
      img: model3,
      review: "The Quality of the jewellery is excellent, I'll buy again",
      name: "Cora Jane",
    },
    {
      img: model4,
      review: "The Quality of the jewellery is excellent, I'll buy again",
      name: "Remi Rose",
    },
  ];

  const secondslidermodels = [
    {
      img: model5,
      review:
        "Exquisite craftsmanship, I'll surely purchase from this brand again.",
      name: "Tinsley Grace",
    },
    {
      img: model6,
      review:
        "Exquisite craftsmanship, I'll surely purchase from this brand again.",
      name: "Arynn Layne",
    },
    {
      img: model7,
      review:
        "Exquisite craftsmanship, I'll surely purchase from this brand again.",
      name: "Stella Jo",
    },
    {
      img: model8,
      review:
        "Exquisite craftsmanship, I'll surely purchase from this brand again.",
      name: "Evie Belle",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  const secsettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    rtl: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <>
      <div>
        <div className="text-[white] ">
          <div className="experience-heading text-[35px] md:text-[60px] lg:text-[100px]">
            Customers
          </div>
          <div className="md:flex-row flex  flex-col md:items-center gap-4 lg:gap-28">
            <div className="max-w-[300px] experience-para italic md:order-1 order-2">
              Our regular customers helped us reach the best with their good and
              useful comments and suggestions
            </div>
            <div className="experience-heading text-[35px] md:text-[60px] flex justify-end lg:text-[100px] md:order-2 order-1">
              Experiences
            </div>
          </div>
        </div>
      </div>
      <div className=" text-white mt-4">
        <Slider {...settings}>
          {firstslidermodels.map(({ img, name, review }) => {
            return (
              <div className="px-2">
                <div className="flex experience-slider-border gap-4 rounded-full px-3 py-3 items-center">
                  {/* <div> */}
                  <img src={img} className="h-32 w-32 xl:w-48 xl:h-48 rounded-full object-contain" alt="" />
                  {/* </div> */}
                  <div className="space-y-3">
                    <div className="review-text">{review}</div>
                    <div className="italic font-bold">{name}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <Slider {...secsettings} className="mt-7">
          {secondslidermodels.map(({ img, name, review }) => {
            return (
              <div className="px-2">
                <div className="flex experience-slider-border gap-4 rounded-full px-3 py-3 items-center">
                  {/* <div> */}
                  <img src={img} className="h-32 w-32 xl:w-48 xl:h-48 rounded-full object-contain" alt="" />
                  {/* </div> */}
                  <div className="space-y-3 ">
                    <div className="review-text">{review}</div>
                    <div className="italic font-bold">{name}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
