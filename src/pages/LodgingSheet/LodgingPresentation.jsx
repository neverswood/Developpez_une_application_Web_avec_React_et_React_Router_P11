import React from 'react';
import './LodgingPresentation.css';
import { Stars } from '../../components/Stars.jsx';

export function LodgingPresentation(props) {
  const rating = props.lodging.rating;
  const nameHost = props.lodging.host.name.split(' ');

  return (
    <div className="presentation">
      <div className="lodging-presentation">
        <h1>{props.lodging.title}</h1>
        <p className="location">{props.lodging.location}</p>
        <ul>
          {props.lodging.tags.map((tag) => {
            return (
              <li key={tag}>
                <span className="list">{tag}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="stars-and-host">
        <Stars rating={rating} />
        <div className="host">
          <p className="host-name">
            <span>{nameHost[0]}</span>
            <span className="host-last-name">{nameHost[1]}</span>
          </p>
          <img src={props.lodging.host.picture} alt="Hôte" />
        </div>
      </div>
    </div>
  );
}
