import React from 'react'
import bg from '../../Assets/Cta/cta-bg.png'
import Button from '../Button/Button'

export default function Cta() {
  return (
    <div className='flex justify-center'>
    <div className='mx-auto'>
      <img src={bg} className='relative lg:w-[1000px] filter brightness-[0.3]' alt="" />
       <div className='absolute top-0 '> 
       <div className='text-center text-white text-[50px]'>
        Want to design for own ? <br /> calm, we can do it! 
       </div>
       <div>
        ZALES
       </div>
       <div>
        <Button variant="primary" title="Order Now!" otherclasses="py-2 italic" ></Button>
       </div>
       </div> 
    </div>
    </div>
  )
}
