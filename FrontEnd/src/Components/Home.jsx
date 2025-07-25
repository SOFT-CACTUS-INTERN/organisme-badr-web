import React from 'react';
import Organisme from './Organisme';
import Who from './Who';
import Services from './Services';
import Our from './Our';
import Activities from './Activities';

import Donate from './Donate';
import ScrollToTopButton from './ScrollToTopButton';
import Partenaires from './Partenaires';

const Home = ({ isMobileMenuOpen }) => {
  return (
    <>
      <div className="flex flex-col gap-0 overflow-x-hidden bg-[#FCFAF8]  dark:bg-white dark:text-black ">
        <Organisme />
        <Partenaires/>
        <Who />
        <Services />
        <Our />
        <Activities />
      
        <Donate />
        {!isMobileMenuOpen && <ScrollToTopButton />}
      </div>
    </>
  );
};

export default Home;
