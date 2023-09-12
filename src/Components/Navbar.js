import React, { useState } from "react";
import Button from "./Button/Button";

import logo from "../Assets/logo/logo2.svg";

import "./navbar.css";
import Icon from "./Icon/Icon";
import Hamburger from "./Hamburger/Hamburger";
import SearchBtn from "./SearchBtn/SearchBtn";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const menutoggle = () => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  return (
    <>
      <div className="max-w-[1400px] sticky top-0 mx-auto lg:px-0 px-3 hidden lg:block desktop-nav z-50">
        <nav className="flex justify-between rounded-[40px]  bg-[#262626] text-white py-5 px-6 my-nav">
          <div className="flex lg:gap-[25px] xl:gap-[80px] items-center">
            <div>
              <Icon icon={logo} otherclasses="lg:h-10 xl:h-14"></Icon>
            </div>
            <ul className="flex items-center gap-[15px]">
              <li>
                <a href="/home" className="nav-items max-w-max relative navbarunderline">
                  Home
                </a>
              </li>
              <li>
                <a href="/new" className="nav-items max-w-max relative navbarunderline">
                  New
                </a>
              </li>
              <li>
                <a href="/products" className="nav-items max-w-max relative navbarunderline">
                  Products
                </a>
              </li>
              <li>
                <a href="/ourstory" className="nav-items max-w-max relative navbarunderline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/contact" className="nav-items max-w-max relative navbarunderline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/gifting" className="nav-items max-w-max relative navbarunderline">
                  Gifting
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <SearchBtn />
            <Button variant="primary" title="Shop" />
            <Button variant="secondary" title="Login" />
          </div>
        </nav>
      </div>
      <div className="mobile-nav lg:hidden text-white px-3">
        <nav className=" text-white  rounded-3xl">
          <div className="bg-[#262626] flex justify-between  px-4 py-5 items-center rounded-3xl">
            <Icon icon={logo} otherclasses="h-10"></Icon>
            <div className="">
              <Hamburger menutoggle={menutoggle} />
            </div>
          </div>
          {menu ? (
            <ul className="px-4 py-5 scale-up-tr mt-3 bg-black rounded-3xl flex-col">
              <li className="py-2">
                <a href="/home" className="nav-items max-w-max relative navbarunderline">
                  Home
                </a>
              </li>
              <li className="py-2">
                <a href="/new" className="nav-items max-w-max relative navbarunderline">
                  New
                </a>
              </li>
              <li className="py-2">
                <a href="/products" className="nav-items max-w-max relative navbarunderline">
                  Products
                </a>
              </li>
              <li className="py-2">
                <a href="/ourstory" className="nav-items max-w-max relative navbarunderline">
                  Our Story
                </a>
              </li>
              <li className="py-2">
                <a href="/contact" className="nav-items max-w-max relative navbarunderline">
                  Contact
                </a>
              </li>
              <li className="py-2">
                <a href="/gifting" className="nav-items max-w-max relative navbarunderline">
                  Gifting
                </a>
              </li>
              <li className="flex gap-2 pt-4">
                <Button otherclasses="" variant="primary" title="Shop" />
                <Button otherclasses="" variant="secondary" title="Login" />
              </li>
            </ul>
          ) : null}
        </nav>
      </div>
    </>
  );
}
