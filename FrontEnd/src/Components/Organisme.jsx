import React from 'react'
import fleche3 from '../assets/svg/fleche3.svg';
import ligne1 from '../assets/svg/ligne1.svg';
// import chms from '../assets/svg/chms.svg';
// import or from '../assets/svg/or.svg';
// import focht from '../assets/svg/focht.svg';
// import focht2 from '../assets/svg/focht2.svg';
import photo1 from '../assets/svg/photo1.svg';
import '../assets/styles/organisme.css';
import { useNavigate } from 'react-router-dom';


function Organisme() {
    const navigate = useNavigate();

    return (
        <section className="organisme-section w-full  min-h-screen flex justify-center items-center bg-[#FCFAF8] "  >

          
            <div className="organisme-container dark:text-black bg-white rounded-4xl lg:h-[70vh]  2xl:w-[90%]    shadow-md lg:w-3/4 md:w-full h-screen sm:w-3/4 w-full sm:h-100 flex flex-col md:flex-row justify-center md" >
              
                <div className="containers relative w-full md:w-1/2 flex items-end justify-center md:mb-0 z-10 min-h-[250px] sm:min-h-0 lg:w-1/2">
                    <img src={photo1} alt="Vite logo"
                        className="image1 max-w-full absolute w-10/12 sm:w-9/12 md:w-full  md:max-w-none   bottom-0"     style={{ clipPath: 'inset(1mm 0 0 0)' }}


                    />

                </div>
                <div className='infos w-full md:w-1/2 px-4 md:px-0 lg:w-1/2 '>
                    <div className="bare1  flex justify-end items-center gap-2 md:gap-4 lg:justify-end " style={{ padding: '1rem' }}>
                        <h1 className="titre1 text-[#38B000] sm:text-lg md:text-xl text-center font-bold lg:text-right">
                            منظمة <span className="text-[#FFB700]">البدر</span>
                        </h1>
                        <img
                            src={fleche3}
                            alt="fleche3"
                            className="fleche3 sm:block lg:block md:hidden w-1/6 2xl:block  h-6 md:w-8 md:h-8"
                        />
                    </div>

                    <div>
                        <h2 className='titre0 font-bold text-xl   sm:text-2xl md:text-3xl lg:text-3xl text-right md:text-right' style={{ padding: '1.5rem' }}>
                            منظمة البدر للأشخاص ذوي الإعاقة
                            و المرأة و الطفل
                        </h2>
                        <div className='flex flex-col md:flex-row'>

                            <p className='parag0 text-right text-sm md:text-base text-[#797979]' style={{ padding: '0 1rem' }}>منظمة البدر للأشخاص ذوي الإعاقة والمرأة والطفل هي منظمة تهدف إلى تقديم الدعم والرعاية للأفراد الذين يعانون من الإعاقة، بالإضافة إلى الاهتمام بقضايا المرأة والطفل</p>
                            <img
                                src={ligne1}
                                alt="ligne1"
                                className="ligne01 w-8 h-auto md:w-auto md:h-auto"
                                style={{ padding: '0 1rem' }}
                            />
                        </div>

                    </div>
                    <div className="flex flex-row sm:flex-row justify-end gap-2" style={{ padding: '1.5rem' }}>
                        <button
                            onClick={() => navigate('/Contact')}
                            className="button2 !bg-[#38B000] text-white   text-sm md:text-base px-3 py-2 md:px-4 md:py-2 flex justify-center"
                            style={{ padding: ' 0.5rem' }}
                        >
                            تواصل معنا
                        </button>
                        <button className="button1 !bg-[#FFD000] text-white   text-sm md:text-base px-3 py-2 md:px-4 md:py-2 flex justify-center" style={{ padding: ' 0.5rem'  }}>
                            منظمة غير حكومية
                        </button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Organisme
