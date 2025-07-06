import '../assets/styles/formule.css'
import graph32 from'../assets/svgs/graph32.svg'
import form_graph28 from '../assets/svgs/graph28.svg'
import graph33 from '../assets/svgs/graph33.svg'

const Formule = () => {
    return ( 
        <>
        
     <section className="formule-section">


 <div className='care-title'>
 <div className='ligne-quote'>
<div className='left'></div>
<h2>تواصل معنا</h2>

<div className='right'></div>

 </div>
<h1>   يسعدنا استقبالكم، تعالوا لزيارتنا  <br />وتعرفوا علينا عن قرب.</h1>

 </div>

 <div className='form-pect'>

 <div className='pecture'> 
    <img  src="/organisme-badr-web/flags/study.png" alt="" />
 </div>
 <div className='formule'>

  <h2>يسعدنا سماعكم.</h2>
<img  className="graph33"src={graph33} alt="" />
 <form action="
 ">



<input type="text" placeholder='الاسم الأول والأخير' />
<input type="text" placeholder='البريد إلكتروني' />
<input type="text"  placeholder='رقم الهاتف'/>
<textarea name="" id="" placeholder='رسالتك'></textarea>
<button className='send'>إرسال</button>
<div className='btn-form'>  <button className=' first'

>   <img src={form_graph28} alt="" />اقرأ المزيد عنا
</button>
    <button className=' second'>تبرع الآن <img src={graph32} alt="" /></button>
  
</div>





 </form>


 </div>



 </div>
     </section>
        
        
        
        </>
     );
}
 
export default Formule;