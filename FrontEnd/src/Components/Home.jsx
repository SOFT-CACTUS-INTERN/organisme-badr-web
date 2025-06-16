
import React, { useState } from 'react';
import Organisme from './Organisme';
import Who from './Who';
import Services from './Services';
import Our from './Our';
import Activites from './Activites';
import Donate from './Donate';



const Home = () => {

  const [showReel, setShowReel] = useState(false);

  return (
    <>
      <div className=" w-full h-screen bg-white  ">
       <Organisme/>
       <Who/>
      </div>
       <Services/>
     <Our />
     <div className=''>

     <Activites/>
     <Donate />
     </div>

    </>
  );
}

export default Home;