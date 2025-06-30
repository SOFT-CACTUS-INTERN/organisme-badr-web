import React from 'react'
import Presedent from './Presedent'
import We from './We'
import Story from './Story'
import Services from './Services'
import Donate from './Donate';


function About() {
    return (
        <div className="">
            {/* 2xl:-space-y-[25%] */}
            <Presedent />
            <Story/>
            <We/>
            <Services/>
            <Donate/>
        </div>
    )
}


export default About