import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Header.css';

export function Header() {
  let activeStyle = {
    textDecoration: 'underline',
  };
  let activeClassName = {
    textDecoration: 'underline',
  };
  return (
    <header>
      <img src={logo} alt="logo" className="kasa-logo" />
      <nav className="kasa-nav">
        <NavLink
          to="/"
          className="kasa-link-Acceuil"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className="kasa-link-about"
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}
