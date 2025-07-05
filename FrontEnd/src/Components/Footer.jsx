import React from 'react'
import '../assets/styles/footer.css'
import icon1 from '../assets/svg/icon1.svg';
import icon2 from '../assets/svg/icon2.svg';
import icon3 from '../assets/svg/icon3.svg';
import icon5 from '../assets/svg/icon5.svg';
import icon6 from '../assets/svg/icon6.svg';
import icon7 from '../assets/svg/icon7.svg';

function Footer() {
  return (
    <footer className="relative w-full overflow-visible">
      <div className='relative  min-h-screen'>
        {/* Background Images */}
        <div className="relative w-full pt-2 sm:pt-4 md:pt-6 lg:pt-8 xl:pt-12">
          <div className="relative">
            <img
              src="/organisme-badr-web/images/photo3.png"
              className="w-full h-auto object-cover max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-none"
              alt="Background Footer"
            />
            <img
              src="/organisme-badr-web/images/photo2.png"
              className="absolute top-4 sm:top-8 left-0 w-full sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] h-auto object-cover max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-none"
              alt="Overlay Footer"
            />
          </div>
        </div>

        {/* Second image section */}
        <div className="absolute top-4 sm:top-8 md:top-12 lg:top-16 xl:top-20 left-0 w-full">
          <div className="relative mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-12">
            <img
              src="/organisme-badr-web/images/photo1.png"
              className="w-full h-auto object-cover max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-none"
              alt="Secondary Background"
            />
            <img
              src="/organisme-badr-web/images/photo2.png"
              className="absolute -top-2 sm:-top-4 md:-top-6 lg:-top-8 xl:-top-12 left-0 w-full sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] h-auto object-cover max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-none"
              alt="Secondary Overlay"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className='absolute w-full top-8 sm:top-12 lg:top-12 left-0 px-4 sm:px-6 lg:px-0'>
          {/* Desktop Layout */}
          <div className='hidden lg:flex lg:w-[90%] lg:left-[10%] lg:relative lg:min-h-screen'>
            {/* Contact Info Section */}
            <div className='w-[50%] z-10' style={{ marginTop: '4rem', padding: '2rem' }}>
              <div className="text-right" style={{ marginRight: '7.5rem', marginBottom: '-4rem' }}>
                <h2 className='font-bold text-3xl mb-2'>للتواصل مع منظمتنا</h2>
                <p className='text-lg'>هذا النص هو مثال لنص يمكن أن يستبدل</p>
              </div>

              <div className='flex'>
                {/* Left Icons */}
                <div className='w-[20%] translate-x-90' style={{ marginTop: '0rem' }}>
                  <img src={icon5} alt="icon5" className="" style={{ marginTop: '80px', padding: '1rem' }} />
                  <img src={icon6} alt="icon6" className="" style={{ marginTop: '-20px', padding: '1rem' }} />
                  <img src={icon7} alt="icon7" className="" style={{ marginTop: '-20px', padding: '1rem' }} />
                </div>

                {/* Contact Details */}
                <div className='absolute flex flex-col bg-amber-900'>
                  <div className='absolute top-64'>
                    <svg width="360" height="67" viewBox="0 0 360 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="359.011" y="66.0898" width="358.286" height="66" rx="11.1615" transform="rotate(-180 359.011 66.0898)" fill="url(#paint0_linear_341_639)" />
                      <defs>
                        <linearGradient id="paint0_linear_341_639" x1="359.011" y1="99.0898" x2="717.297" y2="99.0898" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" />
                          <stop offset="0.58555" stopColor="white" stopOpacity="0.598321" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="absolute inset-0 flex items-center ml-12 text-black font-semibold text-2xl">
                      الحي الاداري ص ب 116 بركان
                    </span>
                  </div>

                  <div className='absolute z-0 w-1/4 h-[50.04px] top-44 -ml-44'>
                    <svg width="360" height="67" viewBox="0 0 360 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="359.011" y="66.0898" width="358.286" height="66" rx="11.1615" transform="rotate(-180 359.011 66.0898)" fill="url(#paint0_linear_341_639)" />
                      <defs>
                        <linearGradient id="paint0_linear_341_639" x1="359.011" y1="99.0898" x2="717.297" y2="99.0898" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" />
                          <stop offset="0.58555" stopColor="white" stopOpacity="0.598321" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="absolute inset-0 flex items-center ml-7 text-black font-semibold text-2xl">
                      contact@organismebadr.ma
                    </span>
                  </div>

                  <div className='absolute z-0 h-[50.04px] top-24 -ml-44'>
                    <svg width="360" height="67" viewBox="0 0 360 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="359.011" y="66.0898" width="358.286" height="66" rx="11.1615" transform="rotate(-180 359.011 66.0898)" fill="url(#paint0_linear_341_639)" />
                      <defs>
                        <linearGradient id="paint0_linear_341_639" x1="359.011" y1="99.0898" x2="717.297" y2="99.0898" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" />
                          <stop offset="0.58555" stopColor="white" stopOpacity="0.598321" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-end mr-6 text-black font-semibold text-2xl">
                      05 366 - 122 51
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className='w-[30%] bg-white h-120 rounded-2xl' style={{ padding: '4rem' }}>
              <div className="flex items-center justify-center w-full" style={{ padding: '1rem' }}>
                <div className="flex-1 h-1 bg-gradient-to-r from-white to-[#FFD000] mx-4"></div>
                <h2 className="font-bold text-2xl text-[#38B000] whitespace-nowrap">تواصل معنا</h2>
                <div className="flex-1 h-1 bg-gradient-to-r from-[#FFD000] to-white mx-4"></div>
              </div>

              <div className='w-full h-px bg-[#ADADAD] mt-4'></div>

              <input type="text" placeholder="الاسم الأول و الأخير" className="w-full mr-16 text-right p-2 mb-1 border-none outline-none focus:border-none focus:outline-none" style={{ padding: '1rem' }} />
              <div className='w-full h-px bg-[#ADADAD]'></div>

              <input type="email" placeholder="البريد الإلكتروني" className="w-full mr-16 text-right p-2 mb-1 border-none outline-none focus:border-none focus:outline-none" style={{ padding: '1rem' }} />
              <div className='w-full h-px bg-[#ADADAD]'></div>

              <input type="tel" placeholder="رقم الهاتف" className="w-full mr-16 text-right p-2 mb-1 border-none outline-none focus:border-none focus:outline-none" style={{ padding: '1rem' }} />
              <div className='w-full h-px bg-[#ADADAD]'></div>

              <textarea placeholder="رسالتك" className="w-full mr-16 text-right p-2 mb-1 border-none outline-none focus:border-none focus:outline-none" style={{ padding: '1rem' }}></textarea>
              <div className='w-full h-px bg-[#ADADAD]'></div>

              <div className='flex justify-center items-center' style={{ padding: '1rem' }}>
                <button type="submit" className="w-3/4 !bg-[#38B000] text-white rounded-b-lg flex justify-center" style={{ padding: '0.5rem' }}>
                  إرسال
                </button>
              </div>
            </form>

            {/* Right Icons */}
            <div className='w-[20%]' style={{ marginTop: '4rem' }}>
              <img src={icon1} alt="icon1" className="" style={{ marginTop: '80px', padding: '1rem' }} />
              <img src={icon2} alt="icon2" className="" style={{ marginTop: '6px', padding: '1rem' }} />
              <img src={icon3} alt="icon3" className="" style={{ marginTop: '6px', padding: '1rem' }} />
            </div>
          </div>

          {/* Mobile and Tablet Layout */}
          <div className='lg:hidden flex flex-col space-y-8 mt-16 sm:mt-20 md:mt-24'>
            {/* Mobile Contact Header */}
            <div className="text-center px-4">
              <h2 className='font-bold text-2xl sm:text-3xl mb-2 text-white'>للتواصل مع منظمتنا</h2>
              <p className='text-base sm:text-lg text-white'>هذا النص هو مثال لنص يمكن أن يستبدل</p>
            </div>

            {/* Mobile Contact Information */}
            <div className='flex flex-col space-y-4 px-4'>
              <div className='flex items-center justify-center bg-white bg-opacity-80 rounded-lg p-4'>
                <img src={icon5} alt="phone" className="w-8 h-8 ml-4" />
                <span className="text-black font-semibold text-lg sm:text-xl">05 366 - 122 51</span>
              </div>

              <div className='flex items-center justify-center bg-white bg-opacity-80 rounded-lg p-4'>
                <img src={icon6} alt="email" className="w-8 h-8 ml-4" />
                <span className="text-black font-semibold text-lg sm:text-xl">contact@organismebadr.ma</span>
              </div>

              <div className='flex items-center justify-center bg-white bg-opacity-80 rounded-lg p-4'>
                <img src={icon7} alt="address" className="w-8 h-8 ml-4" />
                <span className="text-black font-semibold text-lg sm:text-xl">الحي الاداري ص ب 116 بركان</span>
              </div>
            </div>

            {/* Mobile Contact Form */}
            <div className='mx-4'>
              <form className='bg-white rounded-2xl p-6 sm:p-8'>
                <div className="flex items-center justify-center w-full mb-6">
                  <div className="flex-1 h-1 bg-gradient-to-r from-white to-[#FFD000] mx-4"></div>
                  <h2 className="font-bold text-xl sm:text-2xl text-[#38B000] whitespace-nowrap">تواصل معنا</h2>
                  <div className="flex-1 h-1 bg-gradient-to-r from-[#FFD000] to-white mx-4"></div>
                </div>

                <div className='space-y-4'>
                  <div>
                    <input
                      type="text"
                      placeholder="الاسم الأول و الأخير"
                      className="w-full text-right p-4 border-none outline-none focus:border-none focus:outline-none text-base sm:text-lg"
                    />
                    <div className='w-full h-px bg-[#ADADAD]'></div>
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="البريد الإلكتروني"
                      className="w-full text-right p-4 border-none outline-none focus:border-none focus:outline-none text-base sm:text-lg"
                    />
                    <div className='w-full h-px bg-[#ADADAD]'></div>
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="رقم الهاتف"
                      className="w-full text-right p-4 border-none outline-none focus:border-none focus:outline-none text-base sm:text-lg"
                    />
                    <div className='w-full h-px bg-[#ADADAD]'></div>
                  </div>

                  <div>
                    <textarea
                      placeholder="رسالتك"
                      rows="4"
                      className="w-full text-right p-4 border-none outline-none focus:border-none focus:outline-none resize-none text-base sm:text-lg"
                    ></textarea>
                    <div className='w-full h-px bg-[#ADADAD]'></div>
                  </div>
                </div>

                <div className='flex justify-center items-center mt-6'>
                  <button
                    type="submit"
                    className="w-3/4 bg-[#38B000] text-white rounded-lg py-3 px-6 font-semibold text-lg hover:bg-green-700 transition-colors"
                  >
                    إرسال
                  </button>
                </div>
              </form>
            </div>

            {/* Mobile Social Icons */}
            <div className='flex justify-center space-x-6 px-4'>
              <img src={icon1} alt="social1" className="w-12 h-12 sm:w-16 sm:h-16" />
              <img src={icon2} alt="social2" className="w-12 h-12 sm:w-16 sm:h-16" />
              <img src={icon3} alt="social3" className="w-12 h-12 sm:w-16 sm:h-16" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='relative w-full mt-8 lg:absolute lg:mt-0' style={{ marginTop: '-6rem', padding: '2rem' }}>
          <h2 className='text-lg sm:text-xl flex justify-center text-blakc lg:text-black'>
            "© SOFTCACTUS، جميع الحقوق محفوظة، 2025"
          </h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer 