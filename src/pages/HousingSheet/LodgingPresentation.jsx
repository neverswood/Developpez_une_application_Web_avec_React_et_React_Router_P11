import React from 'react';
import star from '../../assets/starGrey.jpg';
import './LodgingPresentation.css';
import starColor from '../../assets/starColor.jpg';

export function LodgingPresentation(props) {
  const rating = props.lodging.rating;
  const ratingNumber = parseInt(rating);
  const array = [1, 2, 3, 4, 5];
  const starGrey = <img src={star} alt="Etoile grise" />;
  const starRed = <img src={starColor} alt="Etoile rouge" />;
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
                <p className="list">{tag}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="starsAndHost">
        <div className="stars">
          {array.map((index) => {
            return index < ratingNumber ? starRed : starGrey;
          })}
        </div>
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
