import React from "react";
import "./button.css";

export default function Button({ title, otherclasses, variant }) {
  return (
    <>
      {variant === "secondary" ? (
        <div
          className={`py-1 px-5 rounded-full ${otherclasses} sec-btn-style`}
        >
          {title}
        </div>
      ) : null}

      {variant === "primary" ? (
        <div className={`py-1 px-5 rounded-full ${otherclasses} pri-btn-style`}>
          {title}
        </div>
      ) : null}
    </>
  );
}
