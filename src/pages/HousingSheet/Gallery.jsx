import React, { useState } from 'react';
import './Gallery.css';

export function Gallery(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const changePictureToRight = () => {
    if (currentIndex < props.pictures.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
    return;
  };

  const changePictureToLeft = () => {
    if (currentIndex === 0) {
      setCurrentIndex(props.pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    return;
  };

  return props.pictures.length > 1 ? (
    <div className="gallery">
      <button
        className="btn-gallery btn-left"
        onClick={() => changePictureToLeft()}
      >
        <i className="arrow arrow-left"></i>
      </button>
      <img
        src={props.pictures[currentIndex]}
        alt={props.title}
        className="carousel"
      />
      <button
        className="btn-gallery btn-right"
        onClick={() => changePictureToRight()}
      >
        <i className="arrow arrow-right"></i>
      </button>
    </div>
  ) : (
    <div className="gallery">
      <img
        src={props.pictures[currentIndex]}
        alt={props.title}
        className="carousel"
      />
    </div>
  );
}
