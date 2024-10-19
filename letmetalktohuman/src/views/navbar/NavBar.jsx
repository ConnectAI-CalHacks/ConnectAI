import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the CSS file

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                Let me talk to a HUMAN!
            </div>
            {/* Hamburger menu icon for small screens */}
            <div className="hamburger" onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                <li className="menuItem">
                    <Link onClick={handleMenuClick} to="/" className="link">Home</Link>
                </li>
                <li className="menuItem">
                    <Link onClick={handleMenuClick} to="/app" className="link">Application</Link>
                </li>
            </ul>
        </nav>
    );
}
