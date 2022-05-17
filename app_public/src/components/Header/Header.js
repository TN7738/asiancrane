import React, { useState, useEffect } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { slide as Menu } from 'react-burger-menu';
import './header.scss';

const Header = () => {
    const [isShow, setIsShow] = useState();

    useEffect(() => {
        setIsShow(false);
    }, [])

    const scrollTop = () =>{
        // window.scrollTo(0,0);
        // document.querySelector(".bm-overlay").style.opacity = 0;
        // document.querySelector(".bm-overlay").style.transition = "opacity 0.3s ease 0s, transform 0s ease 0.3s";
        // document.querySelector(".bm-overlay").style.transform = "translate3d(100%, 0px, 0px)";
        // document.querySelector(".bm-menu-wrap").style.transform = "translate3d(100%, 0px, 0px)";
        // document.querySelector(".bm-menu-wrap").setAttribute("aria-hidden", "true");
        // document.querySelector(".bm-menu-wrap").setAttribute("hidden", "true");
        
        console.log("before", isShow);
        setIsShow(!isShow);
        console.log("after", isShow);
        
        
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
                        {
                            isShow ? <div className='asd'>Test </div> : "null"
                        }
                        <Menu right isOpen={isShow}>
                            <div className='mob-anchr-wrap menu-item' onClick={e => scrollTop()}>
                                {/* <a>Home</a> */}
                                Home
                            </div>
                            <ScrollIntoView className='mob-anchr-wrap menu-item' selector="#aboutus">
                                <a>About Us</a>
                            </ScrollIntoView>
                            <ScrollIntoView className='mob-anchr-wrap menu-item' selector="#equipments">
                                <a>Equipments</a>
                            </ScrollIntoView>
                            <ScrollIntoView className='mob-anchr-wrap menu-item' selector="#cranesforsale">
                                <a>Cranes For Sale</a>
                            </ScrollIntoView>
                            <ScrollIntoView className='mob-anchr-wrap menu-item' selector="#services">
                                <a>Services</a>
                            </ScrollIntoView>
                            <ScrollIntoView className='mob-anchr-wrap menu-item' selector="#ourclients">
                                <a>Our Clients</a>
                            </ScrollIntoView>
                            <ScrollIntoView className='mob-anchr-wrap menu-item' selector="#contact">
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