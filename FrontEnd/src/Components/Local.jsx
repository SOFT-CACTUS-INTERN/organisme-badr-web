import React from 'react';
import or2 from '../assets/svg/or2.svg';
import bolara3 from '../assets/svg/bolara3.svg';
import achtith from '../assets/svg/achatith.svg';
import icon8 from '../assets/svg/icon8.svg';
import icon9 from '../assets/svg/icon9.svg';
import icon10 from '../assets/svg/icon10.svg';
import icon11 from '../assets/svg/icon11.svg';
import icon12 from '../assets/svg/icon12.svg';
import icon13 from '../assets/svg/icon13.svg';
import '../assets/styles/local.css';

const Local = () => {
    return (
        <section className="localSection relative bg-white text-black py-8 px-4 sm:px-6 lg:px-8 shadow-xl rounded-2xl border-t-2 border-[#E3DBD8] mx-4 my-8">
            <div className="centenu   w-full local flex flex-col lg:flex-row">
                {/* Partie gauche - Informations */}
                <div className="information relative w-full lg:w-1/2 lg:right-6 lg:top-6 mb-8 lg:mb-0" >
                    {/* Images principales */}
                    <div className="w-full flex justify-center items-center">
                        <img src={or2} alt="Or2" />
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <img src={bolara3} alt="Bolara3" />
                    </div>
                    {/* <div className="w-full transform -rotate-45 -translate-y-24 translate-x-5">
                        <img src={achtith} alt="Achtith" />
                    </div> */}

                    {/* Titre */}
                    <div className="titre flex lg:justify-end absolute top-0 right-0 w-full text-right p-8">
                        <h1 className="font-bold">للتواصل مع منظمتنا</h1>
                    </div>

                    {/* Paragraphe */}
                    <div className="phrase absolute lg:top-[20%] top-[30%] text-right z-10 w-full px-6">
                        <p className="flex justify-end text-2xl sm:text-3xl md:text-4xl">
                            هذا النص هو مثال لنص يمكن أن يستبدل
                        </p>
                    </div>

                    {/* Icônes verticales */}
                    <div className="icons flex flex-col z-10 absolute lg:top-52 top-64 left-1/2 -translate-x-1/2 lg:left-44 lg:translate-x-0 gap-6 justify-end">
                        <div className="icon8 flex  " >
                            <img src={icon8} alt="" />
                        </div>
                        {/* <div className="flex">
                            <img src={icon9} alt="" />
                        </div>
                        <div className="flex">
                            <img src={icon10} alt="" />
                        </div> */}
                    </div>

                    {/* Réseaux sociaux */}
                    <div className="icons2 flex gap-4 absolute top-[80%] left-1/2 -translate-x-1/2 lg:left-[65%] lg:translate-x-0">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={icon11} alt="LinkedIn" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={icon12} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={icon13} alt="Instagram" />
                        </a>
                    </div>
                </div>

                {/* Partie droite - Carte Google Map */}
                <div className="map w-full lg:w-[50%] h-[500px] flex justify-center lg:justify-end px-4 rounded-2xl">
                    <iframe
                        title="Localisation de l'organisme"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.027211276988!2d-2.3226653172190956!3d34.930854502805346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd782531eac8cd55%3A0xab84ac8d6896fbba!2z2KzZhdi52YrYqSDYp9mE2KjYr9ixINmE2YTYo9i02K7Yp9i1INiw2YjZiiDYp9mE2KXYudin2YLYqQ!5e0!3m2!1sfr!2sma!4v1751803297795!5m2!1sfr!2sma"
                        width="100%"
                        height="100%"
                        style={{ border: 0 ,borderRadius:'1rem'}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Local;
