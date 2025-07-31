import graph45 from '../assets/svgs/graph45.svg';
import '../assets/styles/history.css';
import HistoryTitle from './HistoryTitle';
import TimelineItem from './TimelineItem';
import timelineData from '../timelineData.json';

const History = () => {
  return (
    <section className="history-section">
      <HistoryTitle />

     

      <div className="histories">
        <div className="histories-right">
          {timelineData
            .filter(item => item.side === 'right')
            .map((item, i) => (
              <TimelineItem key={i} {...item} />
            ))}
        </div>
        <div className='histories-ligne'>testddddd</div>
        <div className="histories-left">
          {timelineData
            .filter(item => item.side === 'left')
            .map((item, i) => (
              <TimelineItem key={i} {...item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default History;
