import React, { useState } from 'react';
import '../styles/Gallery.css';

export function Gallery(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const changePictureToRight = () => {
    if (currentIndex < props.pictures.length - 1) {
      setCurrentIndex(currentIndex + 1);
      document.querySelector('.number-media').innerHTML = `${
        currentIndex + 2
      } / ${props.pictures.length}`;
    } else {
      setCurrentIndex(0);
      document.querySelector(
        '.number-media'
      ).innerHTML = `1 / ${props.pictures.length}`;
    }
  };

  const changePictureToLeft = () => {
    if (currentIndex === 0) {
      setCurrentIndex(props.pictures.length - 1);
      document.querySelector(
        '.number-media'
      ).innerHTML = `${props.pictures.length}  / ${props.pictures.length}`;
    } else {
      setCurrentIndex(currentIndex - 1);
      document.querySelector(
        '.number-media'
      ).innerHTML = `${currentIndex} / ${props.pictures.length}`;
    }
  };

  return props.pictures.length > 1 ? (
    <div className="gallery">
      <button className="btn-gallery btn-left" onClick={changePictureToLeft}>
        <i className="arrow arrow-left"></i>
      </button>
      <img src={props.pictures[currentIndex]} alt={props.title} />
      <span className="number-media">
        {currentIndex + 1}/{props.pictures.length}
      </span>
      <button className="btn-gallery btn-right" onClick={changePictureToRight}>
        <i className="arrow arrow-right"></i>
      </button>
    </div>
  ) : (
    <div className="gallery">
      <img src={props.pictures[currentIndex]} alt={props.title} />
      <span className="number-media">
        {currentIndex + 1}/{props.pictures.length}
      </span>
    </div>
  );
}
