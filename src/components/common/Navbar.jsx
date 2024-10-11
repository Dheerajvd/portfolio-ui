import React, { useState } from 'react';
import { Icons } from '../../assets/exports.jsx';

const Navbar = ({ scrollToSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        if (menuOpen) {
            console.log("calling this while closing")
            setTimeout(() => {
                setMenuOpen(false);
            }, 0);
        } else {
            setMenuOpen(true);
        }
    };

    return (
        <nav className='navbar'>
            <div className="logo">
                <img className='logo-img' src={Icons.navLogo} alt="Dheeraj" />
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                {menuOpen ? (
                    <img className='icon' src={Icons.close} alt="Close Menu" />
                ) : (
                    <img className='icon' src={Icons.hamburger} alt="Open Menu" />
                )}
            </div>

            <ul className={`nav-links ${menuOpen ? 'show' : 'hide'}`}>
                <li><a onClick={() => { scrollToSection('landing'); toggleMenu(); }}>Landing</a></li>
                <li><a onClick={() => { scrollToSection('skills'); toggleMenu(); }}>Skills</a></li>
                <li><a onClick={() => { scrollToSection('experience'); toggleMenu(); }}>Experience</a></li>
                <li><a onClick={() => { scrollToSection('projects'); toggleMenu(); }}>Projects</a></li>
                <li><a onClick={() => { scrollToSection('testimonials'); toggleMenu(); }}>Testimonials</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
