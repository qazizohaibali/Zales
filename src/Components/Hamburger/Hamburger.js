import React, { useState } from "react";
import './hameburger.css'
export default function Hamburger({menutoggle}) {
 

    return (
    <div className=""  >
      <label class="burger" for="burger">
        <input type="checkbox" id="burger" onClick={menutoggle} />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
}
