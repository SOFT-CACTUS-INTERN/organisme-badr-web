

import  membre from '../assets/svgs/membre.svg';
import mini from '../assets/svgs/mini.svg';
import '../assets/styles/foundation.css'; 
import graph42 from '../assets/svgs/graph42.svg';
import foundation_graph6 from '../assets/svgs/graph6.svg'
import graph43 from '../assets/svgs/graph43.svg';
import { useState } from 'react';
import graph44 from '../assets/svgs/graph44.svg'


const Foundation = () => {
    return ( 
       <section className="foundation-section ">
        <div className='foundation-div'>
 <div className="foundation-images">
    {/* <img src={graph42} alt="graph42" className='graph42' />
    <img src={membre} alt="membre"  className='membre'/>
    <img src={mini} alt="mini" className='mini' /> */}
    <img src={graph44} alt="graph44" />

 </div>
 <div className="foundation-content">
    <img  className='graph43' src={graph43} alt="graph43" />
    <div className='foundation-graph6'>
    <img  src={foundation_graph6} alt="foundation-graph6" />
   </div>
    <h2>أنشطة الجمعية منذ التأسيس</h2>
   <p>
  منذ تأسيسها <span className="highlight-year">سنة 1997</span>، عملت منظمة البدر 
  على تطوير برامجها التربوية والاجتماعية لفائدة الأطفال ذوي الإعاقة الذهنية. انطلقت بخدمة 6 أطفال، وتوسعت تدريجيًا لتشمل مئات المستفيدين، حيث نظمت أنشطة صفية، رياضية، ثقافية، وتوعوية، كما عملت على تقديم الدعم الغذائي، الطبي، والاجتماعي. استفادت الجمعية من دعم مؤسسات محلية ووطنية ودولية، مما ساهم في توسيع خدماتها وتحسين جودة التكفل. ويعكس تطور عدد المستفيدين والأطر خلال السنوات الأخيرة مدى تأثير الجمعية في محيطها الاجتماعي والإنساني. 
</p>

     <div className="foundation-button">
            <button>تأسست سنة 1997</button>
        </div>
 </div>

</div>

       </section>
     );
}
 
export default Foundation;