import React from 'react'
import Presedent from './Presedent'
import We from './We'
import Story from './Story'
// import Services from './Services'
import Nous from './Nous'
import Donate from './Donate';
import Nous from './Nous';


function About() {
    return (
        <div className="flex flex-col ">
            {/* 2xl:-space-y-[25%] */}
            {/* <Presedent /> */}
           <We/>
{/* <Nous/> */}
            <Story/>
            <Nous/> 
            <We/>
            <Donate/>
        </div>
    )
}


export default About