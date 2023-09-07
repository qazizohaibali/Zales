import React from "react";
import { FiSearch } from "react-icons/fi";
export default function SearchBtn() {
  return (
    <div className="btn-style px-2 py-2 rounded-full border-[1px] border-white hover:bg-white cursor-pointer hover:text-[#262626]">
      <FiSearch size="2rem" color="" />
    </div>
  );
}
