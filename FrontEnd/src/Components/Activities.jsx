import '../assets/styles/activite.css';
import activiteGraph7 from '../assets/svgs/graph7.svg';
import activiteGraph14 from '../assets/svgs/graph14.svg';

const ActiviteCard = ({ imageSrc, title, location, description,categorie }) => {
  return (
    <div className="activite">
      <div className="image-div">
       
          <button className="btn-activite">
            {categorie}
            <div className="out"></div>
          </button>
    
        <img className="activite-pecture" src={imageSrc} alt="Activité" />
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
           <img className="activite-graph24" src={activiteGraph14} alt="Icon" />
            للتعرف على المزيد
          </button>
        </div>
      </div>
    </div>
  );
};

const Activities = () => {
  const activiteData = [
    {
      imageSrc: "/organisme-badr-web/flags/study.png",
      title: "التعليم فتح لي فرص كنت أظنها مستحيلة، والآن أصبح لدي حلم أستطيع تحقيقه.",
      location: "Morocco, Berkane",
      description:
        "من ضمن الأنشطة التي تقوم بها منظمتنا غير الحكومية، تنظيم ورش عمل تعليمية في المجتمعات النائية بهدف تعزيز الوعي بأهمية التعليم في تحسين فرص الحياة. تهدف هذه الورش إلى تقديم معلومات قيمة للأطفال والشباب حول كيف يمكن للتعليم أن يساعدهم في تحقيق طموحاتهم وتطوير مهاراتهم.",
   
      categorie:"الطبخ"
    },
    {
      imageSrc: "/organisme-badr-web/flags/study.png",
      title: "التعليم فتح لي فرص كنت أظنها مستحيلة، والآن أصبح لدي حلم أستطيع تحقيقه.",
      location: "Morocco, Berkane",
      description:
        "من ضمن الأنشطة التي تقوم بها منظمتنا غير الحكومية، تنظيم ورش عمل تعليمية في المجتمعات النائية بهدف تعزيز الوعي بأهمية التعليم في تحسين فرص الحياة. تهدف هذه الورش إلى تقديم معلومات قيمة للأطفال والشباب حول كيف يمكن للتعليم أن يساعدهم في تحقيق طموحاتهم وتطوير مهاراتهم.",
      
      categorie:"التعليم"
    },
    {
      imageSrc: "/organisme-badr-web/flags/study.png",
      title: "التعليم فتح لي فرص كنت أظنها مستحيلة، والآن أصبح لدي حلم أستطيع تحقيقه.",
      location: "Morocco, Berkane",
      description:
        "من ضمن الأنشطة التي تقوم بها منظمتنا غير الحكومية، تنظيم ورش عمل تعليمية في المجتمعات النائية بهدف تعزيز الوعي بأهمية التعليم في تحسين فرص الحياة. تهدف هذه الورش إلى تقديم معلومات قيمة للأطفال والشباب حول كيف يمكن للتعليم أن يساعدهم في تحقيق طموحاتهم وتطوير مهاراتهم.",
     
      categorie:"الطبخ"
    },
  ];

  return (
    <section className="activities-section">
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
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث
          يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
        </p>
      </div>

      <div className="activite-groupe">
        {/* {activiteData.map((item, index) => (
          <ActiviteCard key={index} {...item} />
        ))} */}
      </div>
    </section>
  );
};

export default Activities;
