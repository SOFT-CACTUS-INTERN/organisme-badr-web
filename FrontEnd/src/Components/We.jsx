

 import'../assets/styles/we.css'
 import graph1 from'../assets/svgs/graphi1.svg'
 import graph2 from'../assets/svgs/graphi2.svg' 
    import graph3 from'../assets/svgs/graph3.svg'     
      import graph4 from'../assets/svgs/graph4.svg'
     import graph5 from '../assets/svgs/graph5.svg'
  

      import React from 'react';  
      import heart from '../assets/svgs/heartwe.svg'
      import ligne from '../assets/svgs/graph6.svg'
      import graph14 from '../assets/svgs/graph14.svg'
      import we_graph23 from '../assets/svgs/graph23.svg'
      import we_graph21 from '../assets/svgs/cerclegraph.svg'
      import we_graph24 from '../assets/svgs/graph24.svg'
      import { contactNavigate } from './utils'
      import Principal from './Principal'
import { useNavigate } from 'react-router-dom'

      
  

const We = () => {
  const navigate= useNavigate();
    return (  
        <>
      
         <section className=" we-section">  

{/* <div className='title-svg'>

 <div className='we-title'>
            <h1 className='we-title'>من نحن  <span>و ما نؤمن به</span></h1>
            <hr />
            </div>
           <img src={graph5} alt="" />

</div> */}
<Principal heading="  و ما نؤمن به" mini_heading="من نحن " />
       
<div className='we-content'>
  <div className='we-image'>
    <img   className="graph4"src={graph4} alt="" />
    <img className='graph3' src={graph3} alt="" />
     <img className='play-boy' src="/organisme-badr-web/flags/playboy.png" alt="" />
     <img  className="graph1"src={graph1}alt="" />
   
   </div>
  <div className='we-description'>

    <img className='graph2' src={graph2} alt="" />
 <div className="description">
  <div className='name-svg'> <h2>البدر<span>منظمة</span>  </h2>
  <img  className="graph6"src={ligne} alt="" />
  
  </div>
  <p>تسعى إلى إحداث تغيير إيجابي ومستدام في المجتمعات الأكثر حاجة، من خلال برامج في التعليم، والصحة، 
    وتنمية المجتمع. نعمل على تمكين الأفراد ودعم العائلات، ملتزمين بالشفافية والتأثير الحقيقي خطوة بخطوة.
     نعمل بقلب نابض بالمسؤولية لنصنع فرقًا يلامس الحياة حقًا.</p>
      <div className='butt'><button onClick={()=>contactNavigate(navigate)}>تواصل معنا <img  className="graph14"src={graph14} alt="" /></button></div>

 </div>
 <img className='heart' src={heart} alt="" />

<img className='we-graph23' src={we_graph23} alt="" />
<img    className="we-graph21"src={we_graph21}alt="" />
<img className='w-grf21' src={we_graph21} alt="" />
 <img  className="we-graph24"src={we_graph24} alt="" /> 


  </div>
  
 
  

        </div>

         </section>
        </>
    );
}

export default We;
