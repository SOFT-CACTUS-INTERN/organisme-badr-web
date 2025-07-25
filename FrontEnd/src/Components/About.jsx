import React from 'react'
import Presedent from './Presedent'
import We from './We'
import Story from './Story'
// import Services from './Services'
import Nous from './Nous'
import Donate from './Donate';
// import Nous from './Nous';
import ScrollToTopButton from './ScrollToTopButton';
import Partenaires from './Partenaires'


function About({ isMobileMenuOpen }) {
    return (
        <div className="flex flex-col gap-0 overflow-x-hidden bg-[#FCFAF8]  dark:bg-white dark:text-black ">
            {/* 2xl:-space-y-[25%] */}
            <Presedent />
            <Partenaires/>
            <We />

            <Nous />
           
            <Story />

            <Donate />
             {!isMobileMenuOpen && <ScrollToTopButton />}
        </div>
    )
}


export default About