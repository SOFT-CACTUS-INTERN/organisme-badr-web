import React from 'react'

function Donation() {
  return (
         <section className='overflow-x-hidden'>
               <div className="flex items-center justify-between w-full px-4 mt-8 gap-4">
        {/* Ligne à gauche */}
        <div className="flex-1 h-[4px] sm:h-[6px] bg-gradient-to-r from-white to-[#FFD000]" />

        {/* Titre centré */}
        <h2 className="mx-2 text-nowrap font-bold text-base sm:text-2xl text-[#38B000] text-center whitespace-nowrap">
          تعرف على منظمتنا
        </h2>

        {/* Ligne à droite */}
        <div className="flex-1 h-[4px] sm:h-[6px] bg-gradient-to-r from-[#FFD000] to-white" />
      </div>

      <div className='phrase0 flex justify-center mt-4 sm:mt-6 px-4'>
        <h2 className='text-xl sm:text-2xl md:text-3xl dark:text-black lg:text-4xl font-bold text-center'>
          وراء كل إنجاز... فريق يحمل رسالة
        </h2>
      </div>
          </section>
  
  )
}

export default Donation