import '../styles/header.css';  // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'; // Import useState

function Header() {
    const [isOpen, setIsOpen] = useState(false); // State for dropdown

    const toggleNav = () => {
        setIsOpen(!isOpen); // Toggle dropdown state
    };

    return (
        <header>
            <div className='logo-header'>
                <img src='/images/logo-header.png' alt="logo from idk" />
                <h1>Sadye's Resto</h1>
            </div>
        
            <nav className='default-nav'>
                <a href="#home">Home</a>
                <a href="#about-us">About Us</a>
                <a href="#shop">Shop</a>
                <a href="#menu">Menu</a>
                <a href="#page">Page</a>
                <a href="#contact-us">Contact Us</a>
            </nav>

            <button className="btn-style">Reserve Now</button>

            <div id="baby-come">
                <button id="baby-come-back" className="btn-style">Reserve Now</button>
                <div className="cdn-button" onClick={toggleNav}>
                    <FontAwesomeIcon className="fa-icon" icon={isOpen ? faXmark : faBars} />
                </div>

                <div className={`dropdown-nav ${isOpen ? 'open' : ''}`}>
                    <nav>
                        <a href="#home">Home</a>
                        <a href="#about-us">About Us</a>
                        <a href="#shop">Shop</a>
                        <a href="#menu">Menu</a>
                        <a href="#page">Page</a>
                        <a href="#contact-us">Contact Us</a>
                    </nav>
                </div>
            </div>
        </header>     
    );
}

export default Header;
