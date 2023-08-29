import React, { useState } from "react";

export default function UnActiveBtn({ label, active }) {
  const [style, setStyle] = useState(false);

  const stylechanger = () => {
    if (!style || !active) {
        setStyle(true);
    } else {
        setStyle(false);
    }
  };

  console.log(active);

  return (
    <div
      onClick={stylechanger}
      className={`px-7 cursor-pointer py-3 rounded-3xl border-[1px] ${
        style || active
          ? "text-black bg-white"
          : " text-white hover:text-black  border-[#494545] hover:bg-[#9e9e9e]"
      } `}
    >
      <p>{label}</p>
    </div>
  );
}
