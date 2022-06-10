import React from 'react';
import banner from '../assets/banner.png';
import '../styles/Banner.css';

function Banner() {
  return (
    <div className="kasa-banner">
      <img src={banner} alt="banner" className="kasa-banner__img" />
      <h1 className="kasa-banner__slogan">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
