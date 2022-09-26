import React from 'react';
import './LodgingList.css';
import { Card } from './Card.jsx';

export function LodgingList({ data }) {
  return (
    <section className="kasa-lodging-list">
      {data.map((lodging) => {
        return <Card key={lodging.id} lodging={lodging} />;
      })}
    </section>
  );
}
