import React from 'react'
import '../assets/styles/presedent.css';
import '../assets/styles/who.css';
import social from '../assets/svg/social.svg';
function Partenaires() {
  return (
   <div className='partenaire '>
                       <div className='flex '>
   
                           <div className="flex items-center justify-center w-full gap-4">
                               <div className="ligne1 border-[#E5E5E5] border-t-2 flex-grow" style={{ width: '70%' }}></div>
   
                               <h1 className="isam text-[#38B000] whitespace-nowrap text-center flex justify-end " >
                                   شركائنا
                               </h1>
   
                               <div className="ligne2 border-[#E5E5E5] border-t-2 flex-grow"></div>
                           </div>
   
                       </div>
                       <div className="slider-container    " >
                           <div className="slider-track " >
                               <img src={social} alt="social" />
                               <img src={social} alt="social" />
                              
                           </div>
                       </div>
   
                       <hr className="ligne3 border-[#E5E5E5] flex-grow border-t-2 " style={{ width: '100%' }} />
   
                   </div>
  )
}

export default Partenaires