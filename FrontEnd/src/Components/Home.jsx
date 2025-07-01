
import React, { useState } from 'react';
// import Organisme from './Organisme';
// import Who from './Who';
import Services from './Services';
import Our from './Our';

// import Activites from './Activites';
// import Donate from './Donate';



const Home = () => {

  const [showReel, setShowReel] = useState(false);

  return (
    <>
    <div className='flex flex-col gap-44'>

      
       <Services/>
     <Our />
     <div className='  '>

     {/* <Activites/> */}
     
    
   {/* <Donate/> */}
     </div>
    </div>

    </>
  );
}

export default Home;