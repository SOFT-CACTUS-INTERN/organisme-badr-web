import React, { useRef } from 'react';
import '../assets/styles/activite-slider.css';
import graph7 from '../assets/svgs/graph7.svg';
import graph28 from '../assets/svgs/graph28.svg';
import graph29 from '../assets/svgs/graph29.svg';

const activities = [
  {
    id: 1,
    title: 'المرأة',
    text: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.',
    image: graph28
  },
  {
    id: 2,
    title: 'الطفل',
    text: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.',
    image: graph29
  },
  {
    id: 3,
    title: 'ذوي الإعاقة',
    text: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.',
    image: graph7
  }
];

const ActiviteSlider = () => {
  const containerRef = useRef(null);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const cardWidth = container.offsetWidth;
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className="activite-slider">
      <div className="slider-container" ref={containerRef}>
        {activities.map((act, index) => (
          <div key={act.id} className="card" onClick={() => scrollToIndex(index)}>
            <img src={act.image} alt="activité" />
            <h2>{act.title}</h2>
            <p>{act.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActiviteSlider;
