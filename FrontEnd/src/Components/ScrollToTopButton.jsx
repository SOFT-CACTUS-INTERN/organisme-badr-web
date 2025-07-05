import React from 'react';
import '../assets/styles/scrollToTop.css';
import graph31 from '../assets/svgs/graph31.svg';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="scroll-to-top" onClick={scrollToTop}>
      <img className="arrow" src={graph31} alt="Scroll to top" />
    </button>
  );
};

export default ScrollToTopButton;
