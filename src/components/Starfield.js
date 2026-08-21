'use client';
import { useEffect, useState } from 'react';

export default function Starfield({ count = 200 }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(
      Array.from({ length: count }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 1 + Math.random() * 2,
        opacity: 0.5 + Math.random() * 0.5,
      }))
    );
  }, [count]);

  return (
    <div className="starfield">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDuration: `${star.duration}s`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}
