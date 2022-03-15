import React from 'react';
import './ATF.scss';
import Header from '../Header/Header';

const ATF = () => {
    return (
        <section className="top-sec">
            <Header />
            <div className="atf-wrap">
                <h1>Asian Crane Service</h1>
                <h2>We have a young fleet of 20 cranes with capacities ranging from 12 metric tons to 80 metric tones.</h2>
                <a className="cta" href="#contact-us">Make An Enquiry</a>
            </div>
        </section>
    );
}

export default ATF;