import React, { useState, useEffect } from 'react';
import '../assets/styles/activite.css';

import activiteGraph7 from '../assets/svgs/graph7.svg';
import activiteGraph14 from '../assets/svgs/graph14.svg';
import activiteGraph30 from '../assets/svgs/graph30.svg';

const activiteData = [
  {
    title: 'Activité 1',
    description: 'Description de l\'activité 1',
    image: activiteGraph7
  },
  {
    title: 'Activité 2',
    description: 'Description de l\'activité 2',
    image: activiteGraph14
  },
  {
    title: 'Activité 3',
    description: 'Description de l\'activité 3',
    image: activiteGraph30
  }
];

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === activiteData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4s

    return () => clearInterval(interval);
  }, []);

  const currentActivite = activiteData[currentIndex];

  return (
    <div className="activite-container">
      <h2 className="activite-title">Nos Activités</h2>
      <div className="activite-card">
        <img src={currentActivite.image} alt={currentActivite.title} />
        <h3>{currentActivite.title}</h3>
        <p>{currentActivite.description}</p>
      </div>
    </div>
  );
};

export default  Test;
