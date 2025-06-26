

 import'../assets/styles/we.css'
 import graph1 from'../assets/svgs/graphi1.svg'
 import graph2 from'../assets/svgs/graphi2.svg' 
    import graph3 from'../assets/svgs/graph3.svg'     
      import graph4 from'../assets/svgs/graph4.svg'
     import graph5 from '../assets/svgs/graph5.svg'
  

      import React from 'react';  
      import heart from '../assets/svgs/heartwe.svg'
      import ligne from '../assets/svgs/graph6.svg'
  

const We = () => {
    return (  
        <>
      
         <section className=" we-section">  

<div className='title-svg'>

 <div className='we-title'>
            <h1 className='we-title'>من نحن  <span>و ما نؤمن به</span></h1>
            <hr />
            </div>
           <img src={graph5} alt="" />

</div>
<div className='we-content'>
  <div className='we-description'>

    <img className='we-graph2' src={graph2} alt="" />

<img  className="heart"src={heart} alt="" />
<div className='description'>


<div className='name-svg'>
  <img src={ligne} alt="" />
  <h2>منظمة <span> البدر</span></h2>
</div>
<p>تسعى إلى إحداث تغيير إيجابي ومستدام في المجتمعات الأكثر حاجة، من خلال برامج في التعليم، والصحة، وتنمية المجتمع.
   نعمل على تمكين الأفراد ودعم العائلات، ملتزمين بالشفافية والتأثير الحقيقي خطوة بخطوة
 
 
  . نعمل بقلب نابض بالمسؤولية لنصنع فرقًا يلامس الحياة حقًا.</p>
  <div className='btn-div'>
<button>
 <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.02734 11.3996L10.497 1.92993M10.497 1.92993H1.02734M10.497 1.92993V11.3996" stroke="white" stroke-width="1.89393" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
تواصل معنا
</button>

</div>

</div>


  


  </div>
  <div className='we-image'>
    
   <img className='we-graph1' src={graph1} alt="" />
  
   <img className='we-graph4' src={graph4} alt="" />
  
   <img className='we-graph3' src={graph3} alt="" /> <img className='play-boy' src='/organisme-badr-web/flags/playboy.png' alt="" />
   </div>
 
  

        </div>

         </section>
        </>
    );
}

export default We;
