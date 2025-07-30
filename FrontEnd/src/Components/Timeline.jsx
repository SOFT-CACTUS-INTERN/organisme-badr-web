

const timelineData = [
  {
    year: "1997-1998",
    points: [
      "تأسيس الجمعية تحت اسم “الجمعية النسائية للتأهيل المجتمعي نغيلة” في إقليم دريوش.",
      "هدفها: دعم النساء في وضعية هشاشة.",
      "بداية العمل التطوعي بالدوار.",
      "تنظيم أول ورشة في التوعية الصحية.",
    ],
    color: "green",
  },
  {
    year: "2004-2005",
    points: [
      "نقل المكتب المسير للجمعية إلى مركز تاجام بعين زورة.",
      "حصلت على وصل مؤقت وعقدت أول جمع عام تجديدي.",
      "تنظيم أيام دراسية حول التنمية والتمكين الاقتصادي.",
    ],
    color: "orange",
  },
  // ... ajoute les autres années ici
];

const Timeline = () => (
  <div className="histories">
    {timelineData.map((item, index) => (
      <TimelineItem key={index} {...item} />
    ))}
  </div>
);

export default Timeline;
