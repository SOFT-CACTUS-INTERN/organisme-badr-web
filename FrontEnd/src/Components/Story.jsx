 import '../assets/styles/story.css'
 import graph7 from '../assets/svgs/graph7.svg'
//  import boys from '/organisme-badr-web/flags/boys.png'
 import graph8 from '../assets/svgs/graph8.svg'
 import graph9 from '../assets/svgs/graph9.svg'
 import graph10 from '../assets/svgs/graph10.svg' 
 import graph11 from '../assets/svgs/graph11.svg'
 import graph12 from '../assets/svgs/graph12.svg'
 import graph13 from '../assets/svgs/graph13.svg'
//  import graph23 from '/../assets/svgs/graph23.svg'




const Story = () => {
    return ( 
        <>
      <section className="story-section">
         <img  className="graph12"src={graph12} alt="" />
        <div className='title-sv'>
            <img  className="graph7"src={graph7} alt="" />
           <div className='story-title'>
          
            <h1>قصـتـنـا <span> و تاريخنا</span></h1>
            <hr />
           </div>

        </div>
       
        <div className='story-content'>

<div className='story-image'>
     
  
   <img className='graph8' src={graph8} alt="" />
    <img  className="boys"src="/organisme-badr-web/flags/bys.png" alt="" />
  <img  className="graph11"src={graph11} alt="" />
   <img  className="graph10"src={graph10} alt="" /> 
    <img  className="graph9"src={graph9} alt="" />

</div>
<div className='content'>
    <h2>أعوام من الأثر والعمل المجتمعي</h2>
    <p>منذ تأسيسها عام 2015، انطلقت منظمة البدر من رغبة صادقة في دعم وتمكين الأشخاص ذوي الإعاقة، 
        والمرأة، والطفل. جاءت انطلاقتنا استجابةً لحاجة حقيقية، وإيمانًا بأن التغيير يبدأ 
        بخطوة. قصتنا هي مسيرة مستمرة من العطاء، تنمو بالأمل والعمل.</p>
        <button class="stats-button">
  <div class="stat">
    <div class="number">17+</div>
    <div class="label">حائزة على جوائز</div>
  </div>
  <div class="divider"></div>
  <div class="stat">
    <div class="number">135+</div>
    <div class="label">أعضاء فريقنا</div>
  </div>
  <div class="divider"></div>
  <div class="stat">
    <div class="number">15+</div>
    <div class="label">سنوات من العطاء</div>
  </div>
</button>


 <div className='believe'>
 <div class="icon-text">
    <div class="icon"><img  className="graph13"src={graph13} alt="" /></div>
    <div class="text">نؤمن بأن كل طفل ذكي، لذلك نهتم.</div>
  </div>
  <div class="icon-text">
    <div class="icon"><img  className="graph13"src={graph13} alt="" /></div>
    <div class="text">المعلّمون يصنعون فرقًا في حياة طفلك.</div>
  </div>

 </div>

</div>
        </div>

      </section>
        </>
     );
}
 
export default Story;