import React from 'react';
import '../styles/Footer.css';
import logoWhite from '../assets/logoWhite.png';
import kasa2020 from '../assets/kasa2020.png';

function Footer() {
  return (
    <div className="footer">
      <img src={logoWhite} alt="Kasa" className="kasa-logoWhite" />
      <img src={kasa2020} alt="Kasa" className="kasa-2020" />
    </div>
  );
}

export default Footer;