import React from 'react';
import data from '../data/data.json';
import '../styles/Card.css';

function Card() {
  const lodging = data.map((toto) => {
    return (
      <div className="kasa-card">
        <h2 className="kasa-card__title">{toto.title}</h2>
      </div>
    );
  });
  return <div className="kasa-lodging">{lodging}</div>;
}

export default Card;