import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
import '../styles/Card.css';

export function Card() {
  const lodging = data.map((toto) => {
    return (
      <div className="kasa-card" key={toto.id}>
        <Link to={`/housingSheet/${toto.id}`}>
          <img
            src={toto.cover}
            alt="lodging-pictureCover"
            className="kasa-card__cover"
          />
          <h2 className="kasa-card__title">{toto.title}</h2>
        </Link>
      </div>
    );
  });
  return <div className="kasa-lodging">{lodging}</div>;
}
