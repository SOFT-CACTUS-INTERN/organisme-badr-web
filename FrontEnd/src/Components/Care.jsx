
import '../assets/styles/care.css'
import graph from '../assets/svgs/graph5.svg'
//  import girls from '/organisme-badr-web/flags/girls.png'
//  import child from '/organisme-badr-web/flags/child.png'
// import groupe from '/organisme-badr-web/flags/groupe.png'
import graph22 from '../assets/svgs/graph22.svg'
import graph23 from '../assets/svgs/graph23.svg'
import graph24 from '../assets/svgs/graph24.svg'
import graph25 from '../assets/svgs/graph25.svg'
import graph26 from '../assets/svgs/graph26.svg'
import graph27 from '../assets/svgs/graph27.svg'
import graphb from '../assets/svgs/graph24.svg'
import Title from './Title'





const Care = () => {
    return (


            <section className='care-section'>

<Title title="خطوتك اليوم تُنقذ غدًا" mini_title="كل تبرع هو بذرة أمل نزرعها في أرض العطاء"/>

                {/* <div className='care-title'>
                    <div className='ligne-quote'>
                        <div className='left'></div>
                        <h2>أمل لكل فئة</h2>

                        <div className='right'></div>

                    </div>
                    <h1>تمكين، رعاية، أمل، حياة</h1>

                </div> */}
                <img className='graph23-top ' src={graph23} alt="" />
                <img className="graph22-top " src={graph22} alt="" />
                <img className='  graph24-top ' src={graph24} alt="" />
                <img className=' graph25-top ' src={graph25} alt="" />
                <div className='cares'>
                    <div className='care'>

                        <div className='image'>
                            <img className='' src="/organisme-badr-web/flags/girls.png" alt="" />
                        </div>
                        <div className='care-content'>
                            <div className='care-name'>
                                <img className='graph' src={graph} alt="" />
                                <div className='name-ligne'>
                                    <h2 ><span>ذوي الاحتياجات </span> الخاصة</h2>
                                    <hr />
                                </div>


                            </div>
                            <h3>  .إرادتهم أقوى من التحدي </h3>
                               <div className='care-p'> 
                            <p>ذوي الاحتياجات الخاصة ليسوا بحاجة إلى الشفقة،
                                بل إلى الفرص. هم أصحاب طاقات كامنة، وإرادات صلبة،
                                لا تعوقهم التحديات بقدر ما تدفعهم للمضي قدمًا بإصرار.
                                <br /> تمكينهم هو تمكين للمجتمع بأكمله، ودمجهم حق وليس فضلًا. نؤمن بأن الاختلاف هو ما يصنع التميز، وأن لكل فرد بصمته التي لا يمكن لأحد غيره أن يتركها.</p>

                        </div>
                        </div>
                    </div>


                    <div className='care second'>

                        <div className='image'>
                            <img className='' src="/organisme-badr-web/flags/child.png" alt="" />
                        </div>
                        <div className='care-content'>
                            <div className='care-name'>
                                <img className='graph' src={graph} alt="" />
                                <div className='name-ligne'>
                                    <h2 ><span>  </span>الطفل </h2>
                                    <hr />
                                </div>


                            </div>
                            <h3> .الطفل بذرة مستقبل الحياة</h3>
                               <div className='care-p'> 
                            <p>الطفل هو النواة الأولى لبناء مستقبل مزدهر، وهو مرآة صافية تعكس براءة الحياة ونقائها. الاهتمام بالطفل ليس مجرد واجب، بل استثمار في أجيال قادمة تحمل الأمل والتغيير.
                                <br /> فكل ابتسامة طفل، وكل لحظة أمان يعيشها، هي خطوة نحو عالم أكثر رحمة وإنسانية. ومن خلال التربية السليمة والرعاية المتكاملة، نصنع من الطفولة مرحلة قوة وانطلاق لا مجرد عبور عابر.</p>

                        </div>
                        </div>
                    </div>
                    <div className='care'>

                        <div className='image'>
                            <img className='' src="/organisme-badr-web/flags/groupe.png" alt="" />
                        </div>
                        <div className='care-content'>
                            <div className='care-name'>
                                <img className='graph' src={graph} alt="" />
                                <div className='name-ligne'>
                                    <h2 ><span></span> المرأة</h2>
                                    <hr />
                                </div>


                            </div>
                            <h3>  .عزيمتها تتجاوز كل القيود</h3>
                            <div className='care-p'> 
                            <p>ذوي الاحتياجات الخاصة ليسوا بحاجة إلى الشفقة،
                                بل إلى الفرص. هم أصحاب طاقات كامنة، وإرادات صلبة،
                                لا تعوقهم التحديات بقدر ما تدفعهم للمضي قدمًا بإصرار.
                                <br /> تمكينهم هو تمكين للمجتمع بأكمله، ودمجهم حق وليس فضلًا. نؤمن بأن الاختلاف هو ما يصنع التميز، وأن لكل فرد بصمته التي لا يمكن لأحد غيره أن يتركها.</p>
</div>
                        </div>
                    </div>


                </div>
                <img className="graph22-half" src={graph22} alt="" />
                <img className="graph24-half" src={graph24} alt="" />
                <img className="graph23-half" src={graph23} alt="" />


                <img className="graph22-bottom" src={graph22} alt="" />
                <img className="graph26-bottom" src={graph26} alt="" />
                <img className="graph24-bottom" src={graph24} alt="" />
                <img className="graph27-bottom" src={graph27} alt="" />
                <img className="graph-b" src={graph23} alt="" />


            </section>
            );
}

            export default Care;