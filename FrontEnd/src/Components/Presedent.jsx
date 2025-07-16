import React from 'react'
import '../assets/styles/presedent.css';
import green from '../assets/svg/green.svg';
import fleche1 from '../assets/svg/fleche1.svg';
import fleche2 from '../assets/svg/fleche2.svg';
import ligne from '../assets/svg/ligne.svg';
import col from '../assets/svg/col.svg';
import presedant from '../assets/svg/presedant.svg';


function Presedent() {
  return (
    <section className='w-full min-h-screen 2xl:h-screen mb-12 bg-[#FCFAF8]' style={{padding:'2rem'}}>
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

      <div className='presedant relative min-h-screen mt-8 sm:mt-12 flex flex-col lg:flex-row'>
        {/* Left Section */}
        <div className=' w-full min-h-[40vh] sm:min-h-[50vh] lg:h-screen relative lg:w-full lg:justify-center lg:flex'>
          {/* Fleche1 - Arrow - Hidden on mobile, visible on tablet+ */}
          <img
            src={presedant}
            alt="presedant"
            className="image   " style={{width:'100%'}} 
          />

          
        </div>

        {/* Right Section */}
        <div className='w-full min-h-[50vh] lg:min-h-screen lg:w-full px-4 lg:px-0'>
          {/* Title section with arrow */}
          <div className=' flex flex-col gap-2 sm:gap-3'>

            <div className='activite-title '>
              {/* Bloc Titre + ligne */}
              <img
                src={fleche2}
                alt='fleche2'
                className=''
              />
              <div className='activite-name  ' >
                <h1 className=''>
                  رئيسة <span className=''>المنظمة</span>
                </h1>

                {/* Ligne */}
               <hr/>
              </div>

              {/* Flèche */}
            </div>




            <h1 className='secondTitre dark:text-black text-center sm:text-right font-bold text-base sm:text-lg mr-0 sm:mr-8 lg:mr-16 mb-2 sm:mb-4'>
              رؤية إنسانية تقود المسيرة
            </h1>

            <div className='text-sm sm:text-base lg:text-xl text-center sm:text-right mr-0 sm:mr-8 lg:mr-16 space-y-2 sm:space-y-3'>
              <p className='paragraphe1 dark:text-black leading-relaxed sm:leading-loose'>
                نادية عطية هي قائدة منظمة البدر وواحدة من الأصوات الفاعلة في الدفاع عن حقوق الأشخاص ذوي الإعاقة، والنساء، والأطفال
              </p>
              <p className='paragraphe1 dark:text-black leading-relaxed sm:leading-loose'>
                بخبرتها في العمل الإنساني وشغفها بالتغيير، تقود المنظمة برؤية واضحة وإصرار على تحقيق الأثر. بفضل التزامها، أصبحت منظمة البدر رمزًا للأمل والعمل الحقيقي
              </p>
            </div>

            <h2 className='titre3 dark:text-black font-bold text-base sm:text-lg lg:text-xl text-center sm:text-right mr-0 sm:mr-8 lg:mr-16 mt-4 sm:mt-6'>
              كلمة من نادية عطية
            </h2>

            <div className="flex justify-center px-2 sm:px-4 lg:px-0">
              <div className='bg-[#F5F5F5CC] w-full sm:w-5/6 lg:w-3/4 rounded-lg'>
                <div className='flex justify-end'>
                  <img src={col} alt='col' className='w-6 sm:w-8 lg:w-12' />
                </div>
                <div className='text-center sm:text-right p-3 sm:p-4 lg:p-2'>
                  <p className='leading-relaxed dark:text-black sm:leading-loose text-sm sm:text-base lg:text-base'>
                    نؤمن في منظمة البدر بقيم العدالة، والكرامة، والمساواة، والشمول. نلتزم بالعمل بروح التعاون والمسؤولية، ونضع الإنسانية في صميم كل ما نقوم به، إيمانًا منا بأن التغيير يبدأ من القيم التي نتمسك بها ونُجسّدها في واقعنا
                  </p>
                </div>
                <div className='flex justify-start'>
                  <img src={col} alt='col' className='w-6 sm:w-8 lg:w-12' />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Presedent