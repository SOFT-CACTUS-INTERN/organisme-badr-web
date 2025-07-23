import React from 'react'
import '../assets/styles/donateNow.css'
import phrases from '../assets/svg/phrases.svg';
import fleche4 from '../assets/svg/fleche4.svg';

const DonateNow = () => {
  return (
 <section className='bg-[#FCFAF8]'>
        <div className="flex items-center justify-between w-full px-4 mt-8 gap-4">
        {/* Ligne à gauche */}
        <div className="flex-1 h-[4px] sm:h-[6px] bg-gradient-to-r from-white to-[#FFD000]" />

        {/* Titre centré */}
        <h2 className="mx-2 text-nowrap font-bold text-base sm:text-2xl text-[#38B000] text-center whitespace-nowrap">
              خطوتك اليوم تُنقذ غدًا        </h2>

        {/* Ligne à droite */}
        <div className="flex-1 h-[4px] sm:h-[6px] bg-gradient-to-r from-[#FFD000] to-white" />
      </div>

      <div className='phrase0 flex justify-center mt-4 sm:mt-6 px-4 lg:mt-12' style={{marginTop:'2rem'}}>
        <h2 className='text-xl sm:text-2xl md:text-3xl dark:text-black lg:text-4xl font-bold text-center '>
             كل تبرع هو بذرة أمل نزرعها في أرض العطاء        </h2>
      </div>
<div className='bg-[#F7F2ED] w-full flex flex-col items-end' style={{ marginTop: '2rem',padding:'2rem 6rem' }}>
  <h2 className='titre00 w-[40%] text-2xl font-bold text-right' style={{marginBottom:'2rem'}}>
    ساهم معنا اليوم في تغيير حياة من هم في أمسّ الحاجة
  </h2>

  <div className='parag00 w-[40%] text-right'>
    <p>كن جزءًا من رحلتنا لتمكين المجتمعات من خلال التعليم، والرعاية الصحية، والمساعدات الإنسانية. كل تبرع هو رسالة أمل، وخطوة نحو غدٍ أكثر عدلاً وكرامة</p>
  </div>
  <div className='absolute left-[45%]'>
    <img src={fleche4} alt="" />
  </div>
</div>
<div>
    <div className='bg-white w-1/4 absolute rounded-sm' style={{padding:'0.75rem',top:'24rem',left:'16rem'}}>
      <div className='bg-[#38B000] rounded-sm text-center text-white' style={{padding:'0.5rem'}}>
اختر مبلغ مساهمتك
      </div>
    </div>
    <form className='absolute w-1/4' style={{marginTop:'-7rem',marginLeft:'16rem'}} >
      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow" style={{padding:'2rem'}}>
  <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden mb-4" style={{padding:'0.5rem'}}>
    <input
      type="text"
      placeholder="أدخل المبلغ المطلوب"
      className="text-right w-full px-4 py-2 focus:outline-none bg-white placeholder-gray-500"
      dir="rtl"
    />
    <span className=" bg-[#f3ede6] text-gray-700  border-l border-gray-300 " >
      $
    </span>
  </div>

  <p className="text-right text-sm text-gray-600 mb-4" dir="rtl">
    من خلال التبرع، فإنك تساعد في توفير احتياجات المجتمعات.
  </p>

  <input
    type="text"
    placeholder="اسمك الكامل"
    className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-4 text-right placeholder-gray-500" style={{padding:'0.5rem'}}
    dir="rtl"
  />

  <div className="flex items-center justify-end mb-4" style={{padding:'0.5rem'}}>
    <label className="ml-2 text-sm text-gray-700" dir="rtl">إخفاء اسمك (مجهول)</label>
    <input type="checkbox" className="form-checkbox w-4 h-4 text-green-600" />
  </div>

  <input
    type="email"
    placeholder="البريد الإلكتروني الخاص بك"
    className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-4 text-right placeholder-gray-500" style={{padding:'0.5rem'}}
    dir="rtl"
  />

  <input
    type="tel"
    placeholder="رقم هاتفك"
    className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-6 text-right placeholder-gray-500 " style={{padding:'0.5rem',marginTop:'1rem'}}
    dir="rtl" 
  />

  <button
    className="w-full  !bg-[#38B000]  text-white text-lg font-semibold py-2 text-center flex justify-center rounded-full "  style={{marginTop:'2rem',padding:'0.5rem'}}
  >
    ↗ تبرع الآن
  </button>
</div>

    </form>
   <div>
  
   </div>
</div>
<div className='w-1/2 ' style={{padding:'2rem',marginLeft:'50%'}}>

<img src="/organisme-badr-web/images/photo7.png" alt=""  className=''/>
</div>
    </section> 
     )
}

export default DonateNow