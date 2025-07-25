import '../assets/styles/our.css';
import React from 'react';
import graph7 from '../assets/svgs/graph7.svg';
import graph28 from '../assets/svgs/graph28.svg';
import graph29 from '../assets/svgs/graph29.svg';
import graph30 from '../assets/svgs/graph30.svg';
import { useNavigate } from 'react-router-dom';
import { moreNavigate } from './utils';
import Principal  from './Principal';

function Our() {
  const navigate = useNavigate();

  const moreThan = () => {
    navigate('/about'); // 💡 met en minuscule l'URL, c'est plus standard
  };

  const careItems = [
    { title: 'ذوي الإعاقة', description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.' },
    { title: 'الطفل', description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.' },
    { title: 'المرأة', description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.' },
  ];

  return (
    <section className='our-section'>
      <img className="graph29" src={graph29} alt="illustration" />
      <img className="graph30" src={graph30} alt="illustration" />
 
 <Principal heading="رعايتنا" mini_heading="تضم" />
     

      <div className='div-p'>
        <p className='our-p'>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، 
          حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.
        </p>
      </div>

      <div className='groupes'>
        {careItems.map((item, index) => (
          <div className='our-care' key={index}>
            <div className='titre'>
              <h2>{item.title}</h2>
              <hr />
            </div>
            <p>{item.description}</p>
            <div className='btt-div'>
              <button className='btn-care' onClick={()=>moreNavigate(navigate)}>
                لمعرفة المزيد
                <img className='graph28' src={graph28} alt="arrow icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Our;
