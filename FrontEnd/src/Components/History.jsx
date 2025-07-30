
 import  graph45 from '../assets/svgs/graph45.svg'
 import '../assets/styles/history.css';
 import HistoryTitle from './HistoryTitle';
 import TimelineItem from './TimelineItem';

import timelineData from '../data.json';
console.log(timelineData);


const History = () => {
    return (  
       <section className="history-section">

<HistoryTitle />
  <div className="histories">
        {timelineData.map((item, i) => (
          <TimelineItem key={i} {...item} />
        ))}
      </div>








       </section>
    );
}
 
export default History;