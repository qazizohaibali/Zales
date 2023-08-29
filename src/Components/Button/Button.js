import React from "react";
import "./button.css";

export default function Button({ title, otherclasses, variant }) {
  return (
    <>
      {variant === "secondary" ? (
        <div
          className={`py-1 px-5 rounded-full flex items-center justify-between ${otherclasses} sec-btn-style`}
        >
          {title}
        </div>
      ) : null}

      {variant === "primary" ? (
        <div className={`py-1 px-5 rounded-full text-orange-50 flex items-center justify-between ${otherclasses} pri-btn-style`}>
          {title}
        </div>
      ) : null}
    </>
  );
}
