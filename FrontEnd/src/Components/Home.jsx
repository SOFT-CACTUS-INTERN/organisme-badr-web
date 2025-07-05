
import React, { useState } from 'react';
import Organisme from './Organisme';
// import Activites from './Activites';
import Who from './Who';
// import Donate from './Donate';


import Services from './Services';
import Our from './Our';


// import Activites from './Activites';
import Donate from './Donate';
import Activities from './Activities'



const Home = () => {

  const [showReel, setShowReel] = useState(false);

  return (
    <>
   <div className="flex flex-col gap-0">

       <Organisme/>
       <Who/>
       <Services/>
     <Our />
     <div className='  '>

     <Activities/>
     
    
   <Donate/>
     </div>
    </div>

    </>
  );
}

export default Home;