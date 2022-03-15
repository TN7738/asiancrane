import React from 'react'
import './header.scss';

const Header = () => {
    return (
        <div>
            <header id="header">
                <div className="left-nav nav-wrap">
                    <a href="#about-us-wrap">About Us</a>
                    <a href="#equipments-wrap">Equipments</a>
                    <a href="#cranes-for-sale-wrap">Cranes For Sale</a>
                </div>
                <img src="images/acs-logo.png" />
                <div className="right-nav nav-wrap">
                    <a href="#services-wrap">Services</a>
                    <a href="#our-clients-wrap">Our Clients</a>
                    <a href="#contact-us-wrap">Contact Us</a>
                </div>
            </header>
        </div>
    )
}

export default Header;