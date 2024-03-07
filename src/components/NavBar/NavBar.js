import React from 'react';
import './NavBar.css';
import NavLink from '../NavLink';

function NavBar({setPage}) {


  return (
    <nav className="navbar">
      <NavLink onClick={() => setPage('home')} text="Accueil" />
      <NavLink onClick={() => setPage('about')} text="Description"  />
      <NavLink text="Contact" link="#contact" />
    </nav>
  );
}

export default NavBar;