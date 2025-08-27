import React, { useState } from 'react';
import './Carousel.css';

export const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % items.length);
  const prev = () => setCurrent((current - 1 + items.length) % items.length);

  return (
    <div className="carousel">
      <button onClick={prev} className="nav left">‹</button>
      <div className="carousel-item">
        <img src={items[current].posterUrl} alt={items[current].title} />
        <h3>{items[current].title}</h3>
      </div>
      <button onClick={next} className="nav right">›</button>
    </div>
  );
};
