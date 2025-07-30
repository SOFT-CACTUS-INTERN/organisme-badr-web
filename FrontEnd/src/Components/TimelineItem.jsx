import '../assets/styles/history.css';
import graph47 from '../assets/svgs/graph47.svg';

const TimelineItem = ({ year, description, side, color }) => {
  return (
    <div className='timeline-item' >
      <div className="timeline-year" style={{ backgroundColor: color }}>{year}</div>
      <ul className="timeline-description">
   {description.map((line, i) => (
  <li className={`line ${side === 'right' ? 'reverse' : ''}`} key={i}>
    <img src={graph47} alt="" />
    <span>{line}</span>
  </li>
))}


      </ul>
      <img src={graph47} alt="Décor SVG" className="timeline-svg" />
    </div>
  );
};

export default TimelineItem;
