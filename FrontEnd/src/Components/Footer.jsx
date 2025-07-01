import React from 'react'
import '../assets/styles/footer.css'


function Footer() {
  return (



    <footer className='bg-red-500 w-full min-h-screen relative overflow-hidden'>
  <div className="relative h-full">
    {/* First image section */}
    <div className="relative w-full pt-4 sm:pt-6 md:pt-8 lg:pt-12">
      <img
        src="/organisme-badr-web/images/photo3.png"
        className="w-full h-auto object-cover"
        alt="Background Footer"
      />
      <img
        src="/organisme-badr-web/images/photo2.png"
        className="absolute top-0 left-0 w-full sm:w-[80%] md:w-[75%] lg:w-[70%] h-auto object-cover"
        alt="Overlay Footer"
      />
    </div>

    {/* Second image section */}
    <div className="absolute top-12 sm:top-16 md:top-20 lg:top-24 left-0 w-full">
      <div className="relative mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <img
          src="/organisme-badr-web/images/photo1.png"
          className="w-full h-auto object-cover"
          alt="Secondary Background"
        />
        <img
          src="/organisme-badr-web/images/photo2.png"
          className="absolute -top-8 sm:-top-12 md:-top-16 lg:-top-20 left-0 w-full sm:w-[80%] md:w-[75%] lg:w-[70%] h-auto object-cover"
          alt="Secondary Overlay"
        />
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer