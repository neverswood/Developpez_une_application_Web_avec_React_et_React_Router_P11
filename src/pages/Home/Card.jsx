import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import './Card.css';

export function Card() {
  const lodgings = data.map((lodging) => {
    return (
      <div className="kasa-card" key={lodging.id}>
        <Link to={`/lodging-sheet/${lodging.id}`}>
          <img
            src={lodging.cover}
            alt={lodging.title}
            className="kasa-card__cover"
          />
          <h2 className="kasa-card__title">{lodging.title}</h2>
        </Link>
      </div>
    );
  });
  return <div className="kasa-lodging">{lodgings}</div>;
}
