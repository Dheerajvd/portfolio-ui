import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Icons } from '../../assets/exports.jsx';

const RouteNavbar = ({ scrollToSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        if (menuOpen) {
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
                <li>
                    <Link to="/" onClick={() => { scrollToSection('landing'); toggleMenu(); }}>Landing</Link>
                </li>
                <li>
                    <Link to="/skills" onClick={toggleMenu}>Skills</Link>
                </li>
                <li>
                    <Link to="/experience" onClick={toggleMenu}>Experience</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={toggleMenu}>Projects</Link>
                </li>
            </ul>
        </nav>
    );
};

export default RouteNavbar;
