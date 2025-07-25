import React from 'react'
import { useState } from 'react';
import '../assets/styles/footer.css'
import icon1 from '../assets/svg/icon1.svg';
import icon2 from '../assets/svg/icon2.svg';
import icon3 from '../assets/svg/icon3.svg';
import icon5 from '../assets/svg/icon5.svg';
import icon6 from '../assets/svg/icon6.svg';
import icon7 from '../assets/svg/icon7.svg';
import footer from '../assets/svg/footer.svg';

function Footer() {
   
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/contacts', form)
      .then(response => {
        setForm({ name: '', email: '', phone: '', message: '' });
        setReponse(true);

        setTimeout(() => {
          setReponse(false);
        }, 4000);
      })
      .catch(err => {
        if (err.response?.data?.errors) {
          alert('Erreur: ' + Object.values(err.response.data.errors).join(', '));
        } else {
          alert('Erreur réseau');
        }
      });
  };
  return (
    <footer className="footer-section relative w-full     bg-[#FCFAF8] " >

      <div className='fotter relative  min-h-screen '>
        {/* Background Images */}
        <div className="background relative w-full ">
          <div className="relative">
            <img
              src="/organisme-badr-web/images/photo3.png"
              className="w-full  object-cover min-h-screen sm:max-h-[50vh] md:h-screen lg:max-h-none"
              alt="Background Footer"
            />
            <img
              src="/organisme-badr-web/images/photo2.png"
              className="absolute top-4 sm:top-8 left-0 w-full min-h-screen sm:w-[85%] md:h-screen md:w-[80%] lg:w-[75%] xl:w-[70%] h-auto object-cover max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-none"
              alt="Overlay Footer"
            />
          </div>
        </div>

        {/* Second image section */}
        <div className="background2 absolute top-4 sm:top-8 md:top-12 lg:top-16 xl:top-20 left-0 w-full ">
          <div className="relative mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-12">
            <img
              src="/organisme-badr-web/images/photo1.png"
              className="w-full h-auto object-cover md:h-screen min-h-screen sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-none"
              alt="Secondary Background"
            />
            <img
              src="/organisme-badr-web/images/photo2.png"
              className="absolute -top-2 sm:-top-4 sm:block lg:block md:hidden  2xl:block  md:h-screen  min-h-screen md:-top-6 lg:-top-8 xl:-top-12 left-0 w-full sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] h-auto object-cover max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-none"
              alt="Secondary Overlay"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className='footer-container flex justify-center  absolute w-full top-8 sm:top-12 lg:top-12 left-0 px-4 sm:px-6 lg:px-0'>
          {/* Desktop Layout */}
          <div className='hidden lg:flex lg:w-[90%] lg:left-[10%] lg:relative lg:min-h-screen'>
            {/* Contact Info Section */}
            <div className='iconsFotter w-[50%] z-10' style={{ marginTop: '4rem', padding: '2rem' }}>
                      <img src={footer} className='iconsnFotter'/>

            </div>

            {/* Contact Form */}
            <form className="contact-form   w-[70%] sm:w-[30%] lg:w-[30%] bg-white h-120 rounded-2xl p-6 sm:p-10 2xl:h-[50vh] 2xl:w-[25%]">
              <div className="flex items-center justify-center w-full gap-8" style={{ padding: '1rem' }}>
                <div className="flex-1 h-1 bg-gradient-to-r from-white to-[#FFD000] mx-4"></div>
                <h2 className="font-bold text-2xl text-[#38B000] whitespace-nowrap 2xl:font-bold 2xl:text-3xl">تواصل معنا</h2>
                <div className="flex-1 h-1 bg-gradient-to-r from-[#FFD000] to-white mx-4"></div>
              </div>

              <div className='w-full h-px bg-[#ADADAD] mt-4'></div>
             <div className='tvForm'>

              <input type="text" placeholder="الاسم الأول و الأخير" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })} className="textInput w-full mr-16 text-right p-2 mb-1 border-none outline-none focus:border-none focus:outline-none " style={{ padding: '1rem' }} />
              <div className='w-full h-px bg-[#ADADAD]'></div>

              <input type="email" placeholder="البريد الإلكتروني"  value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}className="textInput w-full mr-16 text-right p-2 mb-1 border-none outline-none focus:border-none focus:outline-none" style={{ padding: '1rem' }} />
              <div className='w-full h-px bg-[#ADADAD]'></div>

              <input type="tel" placeholder="رقم الهاتف" value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })} className="textInput w-full mr-16 text-right p-2 mb-1 border-none outline-none focus:border-none focus:outline-none" style={{ padding: '1rem' }} />
              <div className='w-full h-px bg-[#ADADAD]'></div>

              <textarea placeholder="رسالتك" value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })} className="textInput w-full mr-16 text-right p-2 mb-1 border-none outline-none focus:border-none focus:outline-none" style={{ padding: '1rem' }}></textarea>
              <div className='w-full h-px bg-[#ADADAD]'></div>

              <div className='flex justify-center items-center' style={{ padding: '1rem' }}>
                <button type="submit" className="buttonFooter w-3/4 !bg-[#38B000] text-white  flex justify-center " style={{ padding: '1rem' }}>
                  إرسال
                </button>
              </div>
</div>
            </form>

            {/* Right Icons */}
            <div className='iconsFooter w-[20%]  2xl:translate-y-32' style={{ marginTop: '4rem' }}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="">

                <img src={icon1} alt="icon1" className="" style={{ marginTop: '80px', padding: '1rem' }} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="">

                <img src={icon2} alt="icon2" className="" style={{ marginTop: '6px', padding: '1rem' }} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="">
                <img src={icon3} alt="icon3" className="" style={{ marginTop: '6px', padding: '1rem' }} />
              </a>
            </div>
          </div>

          {/* Mobile and Tablet Layout */}

          <div className='mobile lg:hidden flex items-center justify-center min-h-screen px-4 ' style={{padding:'2rem'}}>
              <img
              src="/organisme-badr-web/images/photo2.png"
              className="heart1 absolute top-4 sm:top-8 left-0 w-full min-h-screen sm:w-[85%] md:h-screen md:w-[80%] lg:w-[75%] xl:w-[70%] h-auto object-cover max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-none"
              alt="Overlay Footer"
            />
            <div className='flex flex-col space-y-8 w-full'>        
                  {/* Mobile Contact Form */}
              <div className='form mx-4' style={{ padding: '1rem' }}>
                <form className='formMobile bg-white rounded-2xl p-6 sm:p-8 '>
                  <div className="ichatithan flex items-center justify-center w-full mb-6">
                    <div className="flex-1 h-1 bg-gradient-to-r from-white to-[#FFD000] mx-4"></div>
                    <h2 className="font-bold text-xl sm:text-2xl text-[#38B000] whitespace-nowrap" style={{padding:'2rem'}}>تواصل معنا</h2>
                    <div className="flex-1 h-1 bg-gradient-to-r from-[#FFD000] to-white mx-4"></div>
                  </div>

                  <div className='space-y-4' style={{ padding: '2rem 1rem',display:'flex',flexDirection:'column',gap:'2rem' }}>
                    <div>
                      <input
                        type="text"
                        placeholder="الاسم الأول و الأخير"
                        className="w-full text-right dark:text-black  p-4 border-none outline-none focus:border-none focus:outline-none text-base sm:text-lg" 
                      />
                      <div className='w-full h-px bg-[#ADADAD]'></div>
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="البريد الإلكتروني"
                        className="w-full text-right dark:text-black  p-4 border-none outline-none focus:border-none focus:outline-none text-base sm:text-lg"
                      />
                      <div className='w-full h-px bg-[#ADADAD]'></div>
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="رقم الهاتف"
                        className="w-full text-right dark:text-black  p-4 border-none outline-none focus:border-none focus:outline-none text-base sm:text-lg"
                      />
                      <div className='w-full h-px bg-[#ADADAD]'></div>
                    </div>

                    <div>
                      <textarea
                        placeholder="رسالتك"
                        rows="4"
                        className="w-full text-right dark:text-black  p-4 border-none outline-none focus:border-none focus:outline-none resize-none text-base sm:text-lg"
                      ></textarea>
                      <div className='w-full h-px bg-[#ADADAD]'></div>
                    </div>
                  </div>

                  <div className='buttonFooter flex justify-center items-center mt-6' style={{ padding: '1rem' }}>
                    <button
                      type="submit"
                      className=" w-3/4 !bg-[#38B000] text-white  py-3 px-6  text-lg  flex justify-center " style={{ padding: '0.25rem' }}
                    >
                      إرسال
                    </button>
                  </div>
                </form>
              </div>

              {/* Mobile Social Icons */}
              <div className='flex justify-center gap-4 space-x-6 px-4' style={{ padding: '1rem' }}>
                <img src={icon1} alt="social1" className="w-12 h-12 sm:w-16 sm:h-16" />
                <img src={icon2} alt="social2" className="w-12 h-12 sm:w-16 sm:h-16" />
                <img src={icon3} alt="social3" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>   
          
          <img src={footer}/>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className='phrase01   absolute w-full mt-8 lg:absolute lg:mt-0 flex items-end justify-center' >
          <a
  href="https://softcactus.ma/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm sm:text-xl flex justify-center !text-black !lg:text-black 2xl:text-3xl 2xl:font-light" style={{marginTop:'-4rem'}}
>
  "© SOFTCACTUS، جميع الحقوق محفوظة، 2025"
</a>

        </div>
        
      </div>
    </footer>
  )
}

export default Footer 