import React,{useState} from "react";
import Icon from "../Icon/Icon";
import model1 from "../../Assets/models/model-1.jpg";
import model2 from "../../Assets/models/model-2.jpg";
import model3 from "../../Assets/models/model-3.jpg";
import ring from "../../Assets/ring.png";

import right from "../../Assets/icons/right-arow.svg";
import left from '../../Assets/icons/left-arrow.svg'

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


// 1. Pick gemstone and ring base.
// 2. Securely set the dazzling gemstone.
// 3. Finalize for elegant and chic design.
// 4. Capture images, showcase its beauty.

export default function SubHero() {
    
    const [check ,setCheck] = useState(0)


    const checker = ()=>{
       
        if(check<4){
            setCheck((prev)=>{
                return (prev+1)
            })
            console.log(check)
        }
    }

    const prev_checker = ()=>{
        if(check>0){
            setCheck((prev)=>{
                return (prev-1)
            })
            console.log(check)
        }
    }

    return (
    <div className="flex text-white">
      <div className="max-w-[900px] w-full flex items-center bg-[#1d1d1d] rounded-3xl">
        <div className="flex items-center bg-[#1d1d1d] z-[1000]">
          <div className="bg-[#926a55] flex items-center justify-center rounded-full h-36 w-36">
            <div className="backdrop-blur-[20px] rounded-full translate-x-[70px] opacity-100">
              {/* <button onClick={checker} className="cursor-pointer"> */}
              {
                (check<4) ? <button onClick={checker} ><Icon icon={right}></Icon></button>  :<button onClick={prev_checker} ><Icon icon={left}></Icon></button> 
              }
               
              {/* </button> */}
            </div>
          </div>
        </div>
        <div className="bg-white h-36 w-36 rounded-full justify-end flex items-center -translate-x-16">
          <img src={ring} className="translate-x-1" alt="" />
        </div>
        <div className="">
            {
                (check === 0) ?  
                <h2>{ringsdata[check].title}</h2> 
                :null
            }
                <p>{ringsdata[check].step}</p>

            
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
