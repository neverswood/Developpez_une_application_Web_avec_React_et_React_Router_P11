import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Header.css';

function Header() {
  let activeStyle = {
    textDecoration: 'underline',
  };
  let activeClassName = {
    textDecoration: 'underline',
  };
  return (
    <div className="kasa-header">
      <img src={logo} alt="Kasa" className="kasa-logo" />
      <nav className="kasa-nav">
        <NavLink
          to="/"
          className="kasa-link-Acceuil"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/"
          className="kasa-link-Apropos"
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
