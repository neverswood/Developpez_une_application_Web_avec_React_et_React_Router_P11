import React from 'react';
import banner from '../assets/banner.png';
import '../styles/Banner.css';

export function Banner() {
  return (
    <section className="kasa-banner">
      <img src={banner} alt="banner" className="kasa-banner__img" />
      <h1 className="kasa-banner__slogan">Chez vous, partout et ailleurs</h1>
    </section>
  );
}
