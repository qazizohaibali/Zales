import React from 'react'

export default function Button({title,otherclasses }) {
  return (
    <div className={`py-1 px-5 rounded-full ${otherclasses}`}>
      {title}
    </div>
  )
}
