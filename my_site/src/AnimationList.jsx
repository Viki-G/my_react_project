import React, { useEffect, useState } from 'react';
import './Animation.css';

const AnimationList = () => {
  const [animations, setAnimations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3003/animation')
      .then((response) => response.json())
      .then((data) => {
        setAnimations(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading animations:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading animations...</p>;

  return (
    <div className="animation-list">
      {animations.map((anim, index) => (
        <div key={index} className="animation-card">
          <img src={anim.preview} alt={anim.title} className="preview" />
          <h2>{anim.title}</h2>
          <p>Studio: {anim.studio}</p>
          <p>Year: {anim.year}</p>
          <p>Type: {anim.type}</p>
        </div>
      ))}
    </div>
  );
};

export default AnimationList;