import React, { useState } from "react";
import Button from "./Button";
import {FiSearch} from 'react-icons/fi'
import {TbMenu2} from 'react-icons/tb'
import './navbar.css'
export default function Navbar() {
  
  const [menu,setMenu]= useState(false)
  
  const menutoggle = ()=>{
    if (!menu) {
    setMenu(true)
      
    }else{
    setMenu(false)

    }
   
  }

  return (<>
    <div className="max-w-[1140px] mx-auto hidden lg:block desktop-nav">
        <nav className="flex justify-between rounded-full bg-[#262626] text-white py-2 px-5 my-nav">
          <div className="flex gap-[80px] items-center">
            <div>
              <h3>ZALES</h3>
            </div>
            <ul className="flex items-center gap-[10px]">
              <li><a href="/home" className="nav-items">Home</a></li>
              <li><a href="/new" className="nav-items">New</a></li>
              <li><a href="/products" className="nav-items">Products</a></li>
              <li><a href="/ourstory" className="nav-items">Our Story</a></li>
              <li><a href="/contact" className="nav-items">Contact</a></li>
              <li><a href="/gifting" className="nav-items">Gifting</a></li>
            </ul>
          </div>
          <div className="flex items-center gap-1">
            <div className="btn-style px-2 py-2 rounded-full">
            <FiSearch/>
            </div>
            <Button otherclasses="btn-style" title="Shop"/>
            <Button otherclasses="btn-style" title="Login"/>
          </div>
        </nav>
    </div>
    <div className="mobile-nav lg:hidden text-white px-3 ">
      <nav className=" text-white  rounded-3xl">
        <div className="bg-[#262626] flex justify-between  px-4 py-5 items-center rounded-3xl">
        <h3>ZALES</h3>
        <div><TbMenu2 size="2rem" className="cursor-pointer" onClick={menutoggle}/></div>
        </div>
        {
          (menu) ? 
          <ul className="px-4 py-5 scale-up-tr mt-3 bg-black rounded-3xl flex-col">
              <li className="py-2"><a href="/home" className="nav-items">Home</a></li>
              <li className="py-2"><a href="/new" className="nav-items">New</a></li>
              <li className="py-2"><a href="/products" className="nav-items">Products</a></li>
              <li className="py-2"><a href="/ourstory" className="nav-items">Our Story</a></li>
              <li className="py-2"><a href="/contact" className="nav-items">Contact</a></li>
              <li className="py-2"><a href="/gifting" className="nav-items">Gifting</a></li>
              <li className="flex gap-2 pt-4">
              <Button otherclasses="btn-style" title="Shop"/>
            <Button otherclasses="btn-style" title="Login"/>
              </li>
          </ul> 
          : null
        }
        
      </nav>
    </div>
    </>
  );
}
