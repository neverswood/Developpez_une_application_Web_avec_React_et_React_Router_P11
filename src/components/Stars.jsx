import React from 'react';
import star from '../assets/starGrey.jpg';
import starColor from '../assets/starColor.jpg';

export function Stars({ rating }) {
  const ratingNumber = parseInt(rating);
  const starsNumber = [1, 2, 3, 4, 5];
  const starGrey = <img src={star} alt="Etoile grise" />;
  const starRed = <img src={starColor} alt="Etoile rouge" />;

  return (
    <div className="stars">
      {starsNumber.map((star) => {
        return (
          <React.Fragment key={star}>
            {star < ratingNumber ? starRed : starGrey}
          </React.Fragment>
        );
      })}
    </div>
  );
}
