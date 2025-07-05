import '../assets/styles/our.css'
import React from 'react'
import graph7 from'../assets/svgs/graph7.svg'
import graph28 from'../assets/svgs/graph28.svg'
import graph29 from '../assets/svgs/graph29.svg'
import graph30 from '../assets/svgs/graph30.svg'



function Our() {
    return (
<section className=' our-section '>
    <img  className="graph29"src={graph29} alt="" />
    <img  className="graph30"src={graph30} alt="" />

 <div className='our-title'>
 <img   className="our-graph7"src={graph7} alt="" />
 <div className='our-name'>
    <h1>    رعايتنا <span>تضم</span> </h1>
    <hr className='our-hr' />

 </div>

    
 </div>
 <div className='div-p'>
 <p className='our-p'>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى </p>
     </div>  
     <div className='groupes'>
        <div className='our-care '>

 <div className='titre'> 
    <h2>المرأة</h2>
    <hr />
 </div>
 <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.</p>
 <div className='btt-div'>
 <button className='btn-care'
 
 
  >لمعرفة المزيد
   <img className='graph28' src={graph28} alt="" />
  
  </button>

</div>
            </div>
            <div className='our-care '>

 <div className='titre'> 
    <h2>المرأة</h2>
    <hr />
 </div>
 <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.</p>
 <div className='btt-div'>
 <button className='btn-care'
 
 
  >لمعرفة المزيد
   <img className='graph28' src={graph28} alt="" />
  
  </button>

</div>
            </div>
            <div className='our-care '>

 <div className='titre'> 
    <h2>المرأة</h2>
    <hr />
 </div>
 <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.</p>
 <div className='btt-div'>
 <button className='btn-care'
 
 
  >لمعرفة المزيد
   <img className='graph28' src={graph28} alt="" />
  
  </button>

</div>
            </div>
            
            
            
            </div>     
        </section>

    )
}

export default Our