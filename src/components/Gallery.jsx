import React, { useState } from 'react';
import '../styles/Gallery.css';

export function Gallery(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const changePictureToRight = () => {
    if (currentIndex < props.pictures.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const changePictureToLeft = () => {
    if (currentIndex === 0) {
      setCurrentIndex(props.pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="gallery">
      {props.pictures.length > 1 && (
        <button className="btn-gallery btn-left" onClick={changePictureToLeft}>
          <i className="arrow arrow-left"></i>
        </button>
      )}
      <img src={props.pictures[currentIndex]} alt={props.title} />
      <span className="number-media">
        {currentIndex + 1}/{props.pictures.length}
      </span>
      <button className="btn-gallery btn-right" onClick={changePictureToRight}>
        {props.pictures.length > 1 ? (
          <i className="arrow arrow-right"></i>
        ) : null}
      </button>
    </div>
  );
}
