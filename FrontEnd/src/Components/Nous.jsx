import React from 'react'
import fleche3 from '../assets/svg/fleche3.svg';
import images from '../assets/svg/images.svg';
import coeur from '../assets/svg/coeur.svg';
import coeur2 from '../assets/svg/coeur2.svg';
import bolara from '../assets/svg/bolara.svg';
import '../assets/styles/nous.css'

function Nous() {
    return (
        <section className="nous-section mt-12  2xl:ml-[10%] bg-[#FCFAF8]" style={{ padding: '0 3rem' }}>
            <div className="nous-container flex flex-col lg:flex-row gap-8" style={{ padding: '0.5rem 1rem' }}>
                {/* Section des photos */}
                <div className="images w-full lg:w-1/3 2xl:w-[40%] flex flex-col gap-4 items-center">
                <img src={images} alt=""   className="relative hidden sm:block md:block 2xl:block lg:block  w-2/3 sm:w-3/4" />
                    {/* <img
                        src="/organisme-badr-web/images/photo10.png"
                        className="relative hidden sm:block md:block 2xl:block lg:block  w-2/3 sm:w-1/2 rounded-lg"
                        alt="Photo 10"
                    />
                    <img
                        src="/organisme-badr-web/images/photo9.png"
                        className="relative hidden sm:block md:block 2xl:block lg:block w-2/3 sm:w-2/3 rounded-lg"
                        alt="Photo 9"
                    /> */}
                    <img src="/organisme-badr-web/images/image3.png" alt="" className='relative block sm:hidden md:hidden 2xl:hidden lg:hidden w-[100%] scale-[1.5] ' />
                    {/* <img src={coeur2} alt="" className='absolute mt-[18%] 2xl:hidden' /> */}
                </div>

                {/* Section du contenu */}
                <div className=" w-full lg:w-2/3 2xl:w-full 2xl:flex 2xl:justify-center lg:flex lg:justify-center flex flex-col gap-6">
                    {/* Première div */}
                    <div className="nous-card relative bg-[#F5F5F5DB] rounded-lg shadow-md text-right" style={{ padding: '1.5rem 2rem' }}>
                        <div className="numero absolute top-16 sm:top-6  left-[97%] bg-[#38B000] rounded-full w-14 h-14 sm:w-[72px] sm:h-[72px] flex justify-center items-center font-bold text-white text-xl sm:text-2xl">
                            01
                        </div>
                        <div className="flex justify-end items-start gap-2 mb-3" style={{ padding: '0.5rem' }}>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-black">رؤيتنا و رسالتنا</h3>
                            <img src={fleche3} alt="" className="mt-1 w-4 sm:w-5 md:hidden hidden lg:block 2xl:block" />
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base dark:text-black">
                            نسعى في منظمة البدر إلى بناء مجتمع شامل وعادل، يُمنح فيه الأشخاص ذوو الإعاقة والمرأة والطفل فرصًا متكافئة للعيش بكرامة والمشاركة الفاعلة في الحياة. رؤيتنا هي عالم يُحترم فيه التنوع وتُصان فيه الحقوق.
                        </p>
                    </div>

                    {/* Deuxième div */}
                    <div className="nous-card relative bg-[#F5F5F5DB] rounded-lg shadow-md text-right" style={{ padding: '1.5rem 2rem' }}>
                        <div className="numero absolute top-16 sm:top-6  left-[97%] bg-[#38B000] rounded-full w-14 h-14 sm:w-[72px] sm:h-[72px] flex justify-center items-center font-bold text-white text-xl sm:text-2xl">
                            02
                        </div>
                        <div className="flex justify-end items-start gap-2 mb-3" style={{ padding: '0.5rem' }}>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-black">مهمتنا جوهر عملنا</h3>
                            <img src={fleche3} alt="" className="mt-1 w-4 sm:w-5 md:hidden hidden lg:block 2xl:block" />
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base dark:text-black">
                            نتمحور في منظمة البدر حول تقديم الدعم والتمكين للأشخاص ذوي الإعاقة، والدفاع عن حقوق المرأة والطفل. نعمل على تنفيذ برامج تنموية وتوعوية تُعزز الدمج المجتمعي، وتُوفر بيئة آمنة وعادلة تُلبي احتياجات الفئات الأكثر ضعفًا.
                        </p>
                    </div>

                    {/* Troisième div */}
                    <div className="nous-card relative bg-[#F5F5F5DB] rounded-lg shadow-md text-right" style={{ padding: '1.5rem 2rem' }}>
                        <div className="numero absolute top-16 sm:top-6 left-[97%] bg-[#38B000] rounded-full w-14 h-14 sm:w-[72px] sm:h-[72px] flex justify-center items-center font-bold text-white text-xl sm:text-2xl ">
                            03
                        </div>
                        <div className="flex justify-end items-start gap-2 mb-3" style={{ padding: '0.5rem' }}>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-black">القيم التي نؤمن بها</h3>
                            <img src={fleche3} alt="" className="mt-1 w-4 sm:w-5 md:hidden hidden lg:block 2xl:block" />
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base dark:text-black">
                            نؤمن في منظمة البدر بقيم العدالة، والكرامة، والمساواة، والشمول. نلتزم بالعمل بروح التعاون والمسؤولية، ونضع الإنسانية في صميم كل ما نقوم به، إيمانًا منا بأن التغيير يبدأ من القيم التي نتمسك بها ونُجسّدها في واقعنا.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nous