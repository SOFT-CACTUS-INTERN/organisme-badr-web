import React from 'react'
import fleche00 from '../assets/svg/fleche00.svg';
import fleche01 from '../assets/svg/fleche01.svg';


function Album() {
  return (
    <section>
        <div className='flex  justify-center gap-8' style={{padding:'2rem'}}>
            <img src={fleche01} alt="" className=' ' />
            <h1 className='text-[#38B000]'><span className='text-[#FFB700] '> " </span>صور من قلب الإنجاز<span className='text-[#FFB700] '> "</span></h1>
            <img src={fleche00} alt="" className='' />
        </div>
        <div className='flex justify-center'>
            <img src="/organisme-badr-web/images/photo12.png" alt="" />
        </div>
      </section>
  )
}

export default Album