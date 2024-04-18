import React from 'react'
import './Navbar.css';
import icon from './icon.png';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar">
            Home
        </div>
        <div className="navbar">
            Features
        </div>
        <div className="navbar">
            Pricing
        </div>
        <div className="navbar">
            Blog
        </div>
        <img src={icon} alt="icon" className="navbar"/>
        <div className="navbar">
            Be
        </div>
    </div>
  )
}

export default Navbar
