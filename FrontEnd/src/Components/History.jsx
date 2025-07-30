
 import  graph45 from '../assets/svgs/graph45.svg'
 import '../assets/styles/history.css';
 import HistoryTitle from './HistoryTitle';

 const timelineData = [
  {
    year: '1997',
    title: 'إنشاء الهيئة',
    description: ['تأسست اللجنة الشرعية لأول مرة...', 'كان هدفها تأطير الفتوى...'],
    side: 'left',
    color: '#25B96D'
  },
  {
    year: '2005-2006',
    title: 'توسيع المهام',
    description: ['تم توسيع العضوية لتشمل علماء جدد...', 'أنشئت لجان محلية...'],
    side: 'right',
    color: '#FFB800'
  },
  {
    year: '2015',
    title: 'التحول الرقمي',
    description: ['بدأ استخدام المنصات الرقمية...', 'تم تطوير أدوات تفاعلية...'],
    side: 'left',
    color: '#4A90E2'
  }
];
const History = () => {
    return (  
       <section className="history-section">

<HistoryTitle />
  <div className="histories">
        {/* {timelineData.map((item, i) => (
          <TimelineItem key={i} {...item} />
        ))} */}
      </div>








       </section>
    );
}
 
export default History;