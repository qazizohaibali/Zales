import React from 'react'
import './icon.css'

export default function Icon({iconHeight,iconWidth,icon}) {
  return (
    <div>
      <img src={icon} className="h-10 w-10" alt="My-Icon"  />
    </div>
  )
}
