import React from 'react'
import './icon.css'

export default function Icon({iconHeight,iconWidth,icon,otherclasses}) {
  return (
    <div className='flex items-center justify-between'>
      <img src={icon} className={`h-[${iconHeight}] w-[${iconWidth}] ${otherclasses}`} alt="My-Icon" />
    </div>
  )
}
