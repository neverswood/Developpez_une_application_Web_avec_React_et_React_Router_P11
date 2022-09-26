import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export function Card({ lodging }) {
  return (
    <div className="kasa-card">
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
}
