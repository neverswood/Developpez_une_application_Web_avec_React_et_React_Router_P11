import React from 'react';
import './LodgingPresentation.css';
import { Star } from '../../components/Star.jsx';

export function LodgingPresentation(props) {
  const rating = props.lodging.rating;
  const nameHost = props.lodging.host.name.split(' ');

  return (
    <div className="presentation">
      <div className="lodgingPresentation">
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

      <div className="starsAndHost">
        <Star rating={rating} />
        <div className="host">
          <p className="nameHost">
            <span>{nameHost[0]}</span>
            <span className="lastName">{nameHost[1]}</span>
          </p>
          <img src={props.lodging.host.picture} alt="Hôte" />
        </div>
      </div>
    </div>
  );
}
