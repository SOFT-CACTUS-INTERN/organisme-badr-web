import react from 'react';
import or2 from '../assets/svg/or2.svg';
import bolara3 from '../assets/svg/bolara3.svg';
import achtith from '../assets/svg/achatith.svg';
import icon8 from '../assets/svg/icon8.svg';
import icon9 from '../assets/svg/icon9.svg';
import icon10 from '../assets/svg/icon10.svg';
import icon11 from '../assets/svg/icon11.svg';
import icon12 from '../assets/svg/icon12.svg';
import icon13 from '../assets/svg/icon13.svg';


const Local = () => {
    return (
        <section className="relative  bg-white text-black py-8 px-4 sm:px-6 lg:px-8 shadow-xl rounded-2xl border-t-2 border-[#E3DBD8]" style={{ margin: '4rem' }}>
            <div className="flex ">


                <div className="relative w-1/2">

                    <div className="w-full flex justify-center items-center">
                        <img src={or2} alt="Or2" />
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <img src={bolara3} alt="Bolara3" />
                    </div>
                    <div className="w-full -rotate-44 -translate-y-90 translate-x-20" >
                        <img src={achtith} alt="Achtith" />
                    </div>
                    <div className=''>

                        <div className='flex lg:justify-end absolute lg:top-0 lg:right-0 w-full text-right top-0 ' style={{ padding: '2rem' }} >
                            <h1 className='font-bold '>للتواصل مع منظمتنا</h1>
                        </div>
                        <div className='absolute lg:top-[20%] top-[30%] text-right z-10  w-full' style={{ padding: '0% 5%' }}>

                            <p className='flex justify-end  text-4xl' >هذا النص هو مثال لنص يمكن أن يستبدل</p>
                        </div>
                    </div>
                    <div className='flex flex-col z-10 absolute lg:top-44 top-64 lg:left-44 -left-2  lg:gap-10 justify-end  w-full ' >

                        <div className='flex  sm:block lg:block md:hidden hidden 2xl:block'>
                            <img src={icon8} alt="" />
                        </div>
                        <div className='flex'>
                            <img src={icon9} alt="" />
                        </div>
                        <div className='flex'>
                            
                            <img src={icon10} alt="" />
                        </div>
                    </div>

                    <div className='flex gap-4 absolute top-[80%]  lg:left-[65%] left-[40%]  '>
                                      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">

                        <img src={icon11} alt="" />
                        </a>
                                      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">

                        <img src={icon12} alt="" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">

                        <img src={icon13} alt="" />
                    </a>
                </div>
            </div>
            <div className="w-1/2 h-[500px] flex justify-end" style={{ padding: '  1rem' }}>
                <iframe
                    title="Localisation de l'organisme"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.027211276988!2d-2.3226653172190956!3d34.930854502805346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd782531eac8cd55%3A0xab84ac8d6896fbba!2z2KzZhdi52YrYqSDYp9mE2KjYr9ixINmE2YTYo9i02K7Yp9i1INiw2YjZiiDYp9mE2KXYudin2YLYqQ!5e0!3m2!1sfr!2sma!4v1751803297795!5m2!1sfr!2sma"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
        </section >
    );
};

export default Local;
