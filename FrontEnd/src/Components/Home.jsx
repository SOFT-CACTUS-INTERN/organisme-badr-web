
import React, { useState } from 'react';
import Organisme from './Organisme';
// import Activites from './Activites';
import Who from './Who';



import Services from './Services';
import Our from './Our';


import Activities from './Activities';
import Donate from './Donate';
 import ScrollToTopButton from './ScrollToTopButton'




const Home = () => {

  const [showReel, setShowReel] = useState(false);

  return (
    <>
   <div className="flex flex-col gap-0 overflow-x-hidden">

       <Organisme/>
       <Who/>
       <Services/>
     <Our />
     <div className='  '>

      
     
      <Activities/> 
   <Donate/> 
  <ScrollToTopButton/>
  
    
     </div>
    </div>

    </>
  );
}

export default Home;