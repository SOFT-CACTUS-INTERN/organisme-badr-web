
import React, { useState } from 'react';
import Organisme from './Organisme';
import Activites from './Activites';
import Who from './Who';
import Donate from './Donate';


import Services from './Services';
import Our from './Our';





const Home = () => {

  const [showReel, setShowReel] = useState(false);

  return (
    <>
      <div className='bg-red-100 flex flex-col gap-44'>

        <div className=" w-full h-screen bg-white  ">
          <Organisme />
          <Who />
        </div>
        {/* <Services />

        <Our /> */}
        {/* <div className='  '>

          <Activites />

          <Donate />

        </div> */}
      </div>

    </>
  );
}

export default Home;