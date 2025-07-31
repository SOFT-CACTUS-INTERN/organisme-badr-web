import '../assets/styles/history.css';
import graph47 from '../assets/svgs/graph47.svg';

const TimelineItem = ({ year, description, side, color, greenWord = [], blackWord = [] }) => {
  // Fonction pour styliser les mots
  const styleWords = (text) => {
    let result = [text];

    // Green Words
    greenWord.forEach(word => {
      if (word && text.includes(word)) {
        result = result.flatMap(segment =>
          typeof segment === 'string' && segment.includes(word)
            ? segment.split(word).flatMap((part, index, arr) =>
                index < arr.length - 1
                  ? [part, <span className="green-word" key={word + index}>{word}</span>]
                  : [part]
              )
            : [segment]
        );
      }
    });

    // Black Words
    blackWord.forEach(word => {
      if (word && text.includes(word)) {
        result = result.flatMap(segment =>
          typeof segment === 'string' && segment.includes(word)
            ? segment.split(word).flatMap((part, index, arr) =>
                index < arr.length - 1
                  ? [part, <span className="black-word" key={word + index}>{word}</span>]
                  : [part]
              )
            : [segment]
        );
      }
    });

    return result;
  };

  return (
    <div className='timeline-item'>
      <div className={`time ${side === 'right' ? 'align-right' : 'align-left'}`}>
        <div className={`timeline-year ${side === 'right' ? 'year-right' : 'year-left'}`} style={{ backgroundColor: color }}>
          {year}
        </div>
      </div>

<svg width="674" height="267" viewBox="0 0 674 267" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.6823 259.398L29.8506 257.197L248.967 76.0815H674V78.9396H249.998L31.6823 259.398Z" fill={color}/>
<path d="M30.7672 263.227C41.0415 263.227 49.3704 261.014 49.3704 258.283C49.3704 255.552 41.0415 253.338 30.7672 253.338C20.493 253.338 12.1641 255.552 12.1641 258.283C12.1641 261.014 20.493 263.227 30.7672 263.227Z" fill={color}/>
<path d="M30.7668 267C15.8556 267 0 263.942 0 258.283C0 252.624 15.8556 249.566 30.7668 
249.566C45.6779 249.566 61.5336 252.624 61.5336 258.283C61.5336 263.942 45.6779 267 
30.7668 267ZM30.7668 250.995C13.4801 250.995 1.43101 254.825 1.43101 
258.283C1.43101 261.741 13.4801 265.571 30.7668 265.571C48.0534 265.571
 60.1026 261.741 60.1026 258.283C60.1026 254.825 48.0534 250.995 30.7668 250.995Z" fill={color}/>
<path d="M433 77.5106L476.904 0H674V77.5106H433Z" fill={color}/>
</svg>

      {/* <svg
        className={`timeline-svg ${side === 'right' ? 'svg-right' : 'svg-left'}`}
        width="645"
        height="184"
        viewBox="0 0 645 184"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.68228 183.398L0.850586 181.197L219.967 0.081543H645V2.9396H220.998L2.68228 183.398Z"
          fill={color}
        />
      </svg> */}

      <ul className={`timeline-description ${side === 'right' ? 'desc-right' : ''}`}>
        {description.map((line, i) => (
          <li className={`line ${side === 'right' ? 'reverse' : ''}`} key={i}>
            <img src={graph47} alt="" />
            <span className='line-span'>{styleWords(line)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineItem;
