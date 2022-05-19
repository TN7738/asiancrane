import React, { useState, useEffect } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { slide as Menu } from 'react-burger-menu';
import './header.scss';

const Header = () => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setIsShow(false);
    }, [isShow])

    const scrollTop = () =>{
        window.scrollTo(0,0);
        setIsShow(!isShow);
    };

    
    return (
        <div className='header-wrap'>
            <header id="header">
                <div className='desktop-header'>
                    <div className="left-nav nav-wrap">
                        <ScrollIntoView className='anchr-wrap' selector="#aboutus">
                            <a>About Us</a>
                        </ScrollIntoView>
                        <ScrollIntoView className='anchr-wrap' selector="#equipments">
                            <a>Equipments</a>
                        </ScrollIntoView>
                        <ScrollIntoView className='anchr-wrap' selector="#cranesforsale">
                            <a>Cranes For Sale</a>
                        </ScrollIntoView>
                    </div>
                    <a onClick={e => scrollTop()}>
                        <img src="images/acs-logo.png" />
                    </a>
                    <div className="right-nav nav-wrap">
                        <ScrollIntoView className='anchr-wrap' selector="#services">
                            <a>Services</a>
                        </ScrollIntoView>
                        <ScrollIntoView className='anchr-wrap' selector="#ourclients">
                            <a>Our Clients</a>
                        </ScrollIntoView>
                        <ScrollIntoView className='anchr-wrap' selector="#contact">
                            <a>Contact Us</a>
                        </ScrollIntoView>
                    </div>
                </div>
                <div className='mobile-header'>
                    <div className='left-wrap'>
                        <img src="images/acs-logo.png" />
                    </div>
                    <div className='right-wrap'>
                        <Menu right isOpen={isShow}>
                            <div className='mob-anchr-wrap menu-item'>
                                <a onClick={e => scrollTop()}>Home</a>
                            </div>
                            <ScrollIntoView className='mob-anchr-wrap menu-item' selector="#aboutus" onClick={() => setIsShow(!isShow)}>
                                <a>About Us</a>
                            </ScrollIntoView>
                            <ScrollIntoView className='mob-anchr-wrap menu-item' selector="#equipments" onClick={() => setIsShow(!isShow)}>
                                <a>Equipments</a>
                            </ScrollIntoView>
                            <ScrollIntoView className='mob-anchr-wrap menu-item' selector="#cranesforsale" onClick={() => setIsShow(!isShow)}>
                                <a>Cranes For Sale</a>
                            </ScrollIntoView>
                            <ScrollIntoView className='mob-anchr-wrap menu-item' selector="#services" onClick={() => setIsShow(!isShow)}>
                                <a>Services</a>
                            </ScrollIntoView>
                            <ScrollIntoView className='mob-anchr-wrap menu-item' selector="#ourclients" onClick={() => setIsShow(!isShow)}>
                                <a>Our Clients</a>
                            </ScrollIntoView>
                            <ScrollIntoView className='mob-anchr-wrap menu-item' selector="#contact" onClick={() => setIsShow(!isShow)}>
                                <a>Contact Us</a>
                            </ScrollIntoView>
                        </Menu>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;