import React, { useState } from 'react'; // ← N’oublie pas d’importer useState !
import '../assets/styles/activite.css';
import activiteGraph7 from '../assets/svgs/graph7.svg';
import activiteGraph14 from '../assets/svgs/graph14.svg';
import activiteGraph30 from '../assets/svgs/graph30.svg';
const ActiviteCard = ({ imageSrc, title, location, description, categorie }) => {
  return (
    <div className="activite">
      <div className="image-div">
        <button className="btn-activite">
          {categorie}
          <div className="out"></div>
        </button>
        {/* <img className="activite-pecture" src={imageSrc} alt="Activité" /> */}

      <div
  className="activite-pecture"
  style={{
    backgroundImage: `url(${imageSrc})`
   
  }}
></div>

      </div>
      <div className="activite-content">
        <h2>{title}</h2>
        <h4>{location}</h4>
        <p>{description}</p>
        <div className="btn-groupe">
          <button className="left-btn">
            <img className="activite-graph24" src={activiteGraph14} alt="Icon" />
            تواصل معنا
          </button>
          <button className="right-btn">
          
            للتعرف على المزيد
          </button>
        </div>
      </div>
    </div>
  );
};

const Activities = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 

   const activiteData = [
    {
      imageSrc: "/organisme-badr-web/flags/study.png",
      title: "التعليم فتح لي فرص كنت أظنها مستحيلة، والآن أصبح لدي حلم أستطيع تحقيقه.",
      location: "Morocco, Berkane",
      description:
        "من ضمن الأنشطة التي تقوم بها منظمتنا غير الحكومية، تنظيم ورش عمل تعليمية في المجتمعات النائية بهدف تعزيز الوعي بأهمية التعليم في تحسين فرص الحياة. تهدف هذه الورش إلى تقديم معلومات قيمة للأطفال والشباب حول كيف يمكن للتعليم أن يساعدهم في تحقيق طموحاتهم وتطوير مهاراتهم.",
   
      categorie:"التعليم"
    },
    {
      imageSrc: "/organisme-badr-web/flags/boy.png",
      title: "التعليم فتح لي فرص كنت أظنها مستحيلة، والآن أصبح لدي حلم أستطيع تحقيقه.",
      location: "Morocco, Berkane",
      description:
        "من ضمن الأنشطة التي تقوم بها منظمتنا غير الحكومية، تنظيم ورش عمل تعليمية في المجتمعات النائية بهدف تعزيز الوعي بأهمية التعليم في تحسين فرص الحياة. تهدف هذه الورش إلى تقديم معلومات قيمة للأطفال والشباب حول كيف يمكن للتعليم أن يساعدهم في تحقيق طموحاتهم وتطوير مهاراتهم.",
      
      categorie:"الطبخ"
    },
    {
      imageSrc: "/organisme-badr-web/flags/girls.png",
      title: "التعليم فتح لي فرص كنت أظنها مستحيلة، والآن أصبح لدي حلم أستطيع تحقيقه.",
      location: "Morocco, Berkane",
      description:
        "من ضمن الأنشطة التي تقوم بها منظمتنا غير الحكومية، تنظيم ورش عمل تعليمية في المجتمعات النائية بهدف تعزيز الوعي بأهمية التعليم في تحسين فرص الحياة. تهدف هذه الورش إلى تقديم معلومات قيمة للأطفال والشباب حول كيف يمكن للتعليم أن يساعدهم في تحقيق طموحاتهم وتطوير مهاراتهم.",
     
      categorie:"mosika "
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === activiteData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? activiteData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="activities-section">

      <img  className='activite-graph30'src={activiteGraph30 }t="" />
      <div className="activite-title">
        <img className="activite-graph7" src={activiteGraph7} alt="Decoration" />
        <div className="activite-name">
          <h1>
            فعاليات <span> منظمة البدر</span>
          </h1>
          <hr />
        </div>
      </div>

      <div className="activite-p">
        <p>
       هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى 
        </p>
      </div>

      <div className="activite-groupe">
        <button className='prev' onClick={handlePrev}> <div className='lgn'>❮</div> </button>

        <ActiviteCard {...activiteData[currentIndex]} />

        <button className='next' onClick={handleNext}> <div className='lgn'>❯</div> </button>
      </div>
    </section>
  );
};

export default Activities;
