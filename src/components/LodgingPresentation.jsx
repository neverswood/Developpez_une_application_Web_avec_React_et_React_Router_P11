import React from 'react';
import star from '../assets/star.png';
import starColor from '../assets/starColor.png';
import '../styles/LodgingPresentation.css';

export function LodgingPresentation(props) {
  const rating = props.lodging.rating;
  const ratingNumber = parseInt(rating);
  const array = [1, 2, 3, 4, 5];
  const starGrey = <img src={star} alt="starGrey" />;
  const starRed = <img src={starColor} alt="starRed" />;
  const nameHost = props.lodging.host.name.split(' ');

  return (
    <div className="lodgingPresentation">
      <h1>{props.lodging.title}</h1>
      <p>{props.lodging.location}</p>
      <ul>
        {props.lodging.tags.map((tag) => {
          return <li>{tag}</li>;
        })}
      </ul>
      <div className="starsAndHost">
        <div className="stars">
          {array.map((index) => {
            return index < ratingNumber ? starRed : starGrey;
          })}
        </div>
        <div className="host">
          <p>
            <span>{nameHost[0]}</span>
            <span className="lastName">{nameHost[1]}</span>
          </p>
          <img src={props.lodging.host.picture} alt="host" />
        </div>
      </div>
    </div>
  );
}

/*    return (
      <div>
        <h1>{lodging.title}</h1>
      </div>
    );*/

/*return lod.forEach((pop) => {
      console.log('pop.id', pop);
    });*/
//
