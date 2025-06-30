import React from 'react'
import Presedent from './Presedent'
import We from './We'
import Story from './Story'
import Services from './Services'
import Donate from './Donate';
import Nous from './Nous';


function About() {
    return (
        <div className="">
            {/* 2xl:-space-y-[25%] */}
            <Presedent />
            <Story/>
<Nous/>
            <We/>
           
        </div>
    )
}


export default About