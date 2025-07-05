import React, { useState } from 'react';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev-btn" onClick={prev}>‹</button>
      <div className="carousel-content">
        {React.Children.map(children, (child, index) => (
          <div
            className="carousel-item"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {child}
          </div>
        ))}
      </div>
      <button className="carousel-btn next-btn" onClick={next}>›</button>
    </div>
  );
};

export default Carousel;
