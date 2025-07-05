import React from 'react'
import background from '../assets/svg/background.svg';
import social from '../assets/svg/social.svg';
import fleche2 from '../assets/svg/fleche2.svg';
import ligne from '../assets/svg/ligne.svg';
import dal from '../assets/svg/dal.svg';


function Who() {
    return (
        <section className='relative  w-full min-h-screen z-20' >
            <img src={background} alt="" className=' absolute -left-[20%] ' />
            <div className='z-10'>

                <div className=' '>

                    {/* <div className="flex items-center   ">
                        <hr className="border-[#E5E5E5] flex-grow border-t-2 w-[88%]" style={{ width: '88%' }} />
                        <h1 className="text-[#38B000] mx-4 whitespace-nowrap mb-9 text-sm sm:text-base md:text-lg lg:text-2xl ">
                            شركائنا
                        </h1>
                        <hr className="border-[#E5E5E5] flex-grow border-t-2 w-[12%]" style={{ width: '12%' }} />
                    </div> */}
                    <div className='flex '>

                        <div className="border-[#E5E5E5] flex-grow border-t-2 " style={{ width: '70%' }} ></div>
                        <h1 className='w-1/4 lg:flex text-[#38B000] justify-center hidden sm:block md:hidden lg:block 2xl:block' >شركائنا</h1>
                        <div className="border-[#E5E5E5] flex-grow border-t-2 " style={{ width: '20%' }} ></div>
                    </div>
                    <div className=' '>
                        <img src={social} alt="" style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <hr className="border-[#E5E5E5] flex-grow border-t-2 " style={{ width: '100%' }} />

                </div>

                <div className='flex lg:flex-row sm:flex-row 2xl:flex-row flex-col z-10'>
                    <div className='lg:w-1/2 sm:w-1/2 2xl:w-1/2 w-full z-10'>
                        <div className=" " >
                            <img src="/organisme-badr-web/images/photo6.png" alt="Superposition" className="" style={{ padding: '0.5rem' }} />
                        </div>
                    </div>
                    <div className=' relative lg:w-1/2 sm:w-1/2 2xl:w-1/2 w-full '>
                        <div className='flex justify-center sm:justify-end md:justify-center lg:justify-end gap-2 sm:gap-4 px-4 sm:px-0'>
                            <div className='flex flex-col items-center sm:items-end'>
                                <h1 className='text-[#FFD000] text-md sm:text-xl md:text-2xl lg:text-3xl font-medium text-center sm:text-right'>
                                    من <span className='text-[#38B000]'>نحن</span>
                                </h1>
                                <img
                                    src={ligne}
                                    alt="Decorative line"
                                    className='hidden sm:block md:hidden lg:block 2xl:block w-1/2 sm:w-2/3 md:w-1/2 h-auto ml-auto'
                                />
                            </div>

                            <div className='flex-shrink-0 flex items-start pt-1 sm:pt-2'>
                                <img
                                    src={fleche2}
                                    alt="Arrow decoration"
                                    className='hidden sm:block md:hidden lg:block 2xl:block w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col w-full z-10 '>
                            <div className='flex lg:justify-end sm:justify-end justify-center md:justify-center w-full'>
                                <h1 className='text-black font-bold text-2xl text-center ' style={{ padding: '2rem' }}>تعرف علينا - لمحة عنا </h1>
                            </div>
<div className=''>

                            <img src={dal} alt="" className='absolute top-[30%]  left-[10%]' />
</div>
                            <div className='text-right  top-[60%] z-10' style={{ padding: '0% 20%' }}>

                                <p >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى </p>
                            </div>
                            <div className='text-right  top-[72%] z-10' style={{ padding: '0% 20%' }}>

                                <p > إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات </p>
                            </div>
                            <div className="z-10 w-full flex flex-col items-center " >
                                <button className="!bg-[#38B000] !text-white !px-6 !py-3 !rounded-lg !text-lg !font-semibold mt-4 mb-8 max-w-fit">
                                    تواصل معنا
                                </button>
                            </div>



                        </div>

                    </div>
                </div>
            </div>




        </section>
    )
}

export default Who