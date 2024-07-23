// src/Component/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../Style/Header.css'; 
import logo from '../Images/logo.png'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className="header">
      <div className="header-brand">
        <img src={logo} alt="Furniture Logo" className="header-logo" />
        <h1>COMFORT HEAVEN</h1>
      </div>
      <button className="mobile-menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`navbar ${menuOpen ? 'mobile-menu open' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/furniture" className="nav-link">Furniture</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">Cart</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
