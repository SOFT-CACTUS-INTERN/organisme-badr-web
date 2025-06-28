
 import '../assets/styles/care.css'
 import graph from '../assets/svgs/graph5.svg'
 import girls from '/organisme-badr-web/flags/girls.png'
 import child from '/organisme-badr-web/flags/child.png'
import groupe from '/organisme-badr-web/flags/groupe.png'


const Care = () => {
    return ( 
        <>

<section className='care-section'>

 <div className='care-title'>
 <div className='ligne-quote'>
<div className='left'></div>
<h2>أمل لكل فئة</h2>

<div className='right'></div>

 </div>
<h1>تمكين، رعاية، أمل، حياة</h1>

 </div>

<div className='cares'>
 <div className='care'>

     <div className='image'>
        <img className='' src={girls} alt="" />
     </div>
     <div  className='care-content'>
 <div className='care-name'>
    <img className='graph' src={graph} alt="" />
    <div  className='name-ligne'>
        <h2 ><span>ذوي الاحتياجات </span> الخاصة</h2>
        <hr/>
    </div>

    
 </div>
<h3>  .إرادتهم أقوى من التحدي </h3>
    <p>ذوي الاحتياجات الخاصة ليسوا بحاجة إلى الشفقة،
         بل إلى الفرص. هم أصحاب طاقات كامنة، وإرادات صلبة، 
        لا تعوقهم التحديات بقدر ما تدفعهم للمضي قدمًا بإصرار.
         <br/> تمكينهم هو تمكين للمجتمع بأكمله، ودمجهم حق وليس فضلًا. نؤمن بأن الاختلاف هو ما يصنع التميز، وأن لكل فرد بصمته التي لا يمكن لأحد غيره أن يتركها.</p>

     </div>
 </div>
 <div className='care second'>

     <div className='image'>
        <img className='' src={child} alt="" />
     </div>
     <div  className='care-content'>
 <div className='care-name'>
    <img className='graph' src={graph} alt="" />
    <div  className='name-ligne'>
        <h2 ><span>  </span>الطفل </h2>
        <hr/>
    </div>

    
 </div>
<h3> .الطفل بذرة مستقبل الحياة</h3>
    <p>الطفل هو النواة الأولى لبناء مستقبل مزدهر، وهو مرآة صافية تعكس براءة الحياة ونقائها. الاهتمام بالطفل ليس مجرد واجب، بل استثمار في أجيال قادمة تحمل الأمل والتغيير.
         <br/> فكل ابتسامة طفل، وكل لحظة أمان يعيشها، هي خطوة نحو عالم أكثر رحمة وإنسانية. ومن خلال التربية السليمة والرعاية المتكاملة، نصنع من الطفولة مرحلة قوة وانطلاق لا مجرد عبور عابر.</p>

     </div>
 </div>
 <div className='care'>

     <div className='image'>
        <img className='' src={groupe} alt="" />
     </div>
     <div  className='care-content'>
 <div className='care-name'>
    <img className='graph' src={graph} alt="" />
    <div  className='name-ligne'>
        <h2 ><span></span> المرأة</h2>
        <hr/>
    </div>

    
 </div>
<h3>  .عزيمتها تتجاوز كل القيود</h3>
    <p>ذوي الاحتياجات الخاصة ليسوا بحاجة إلى الشفقة،
         بل إلى الفرص. هم أصحاب طاقات كامنة، وإرادات صلبة، 
        لا تعوقهم التحديات بقدر ما تدفعهم للمضي قدمًا بإصرار.
         <br/> تمكينهم هو تمكين للمجتمع بأكمله، ودمجهم حق وليس فضلًا. نؤمن بأن الاختلاف هو ما يصنع التميز، وأن لكل فرد بصمته التي لا يمكن لأحد غيره أن يتركها.</p>

     </div>
 </div>


</div>





</section>

       
        
        
        
        
        </>
     );
}
 
export default Care;