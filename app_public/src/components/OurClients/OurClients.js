import React from 'react';
import './OurClients.scss';

const OurClients = () => {
    return (
        <section className="ourclients-afterwrap" id="ourclients">
            <div className="banner">
                <h3>Our Clients</h3>
            </div>
            <div className='grid'>
                <div className='logo-wrap'>
                    <img src='/images/saint-gobain-logo.png' alt='saint-gobain-client-logo' />
                    <img src='/images/tata-logo.png' alt='tata-client-logo' />
                    <img src='/images/BJH-Logo.png' alt='blue-jet-healthcare-client-logo' />
                    <img src='/images/magicrate-logo.jpg' alt='magicrate-client-logo' />
                    <img src='/images/lt-logo.png' alt='larsen-and-tubro-client-logo' />
                    <img src='/images/bpm-logo.jpg' alt='balkrishna-paper-mills-client-logo' />
                    <img src='/images/jmc-logo.png' alt='jmc-client-logo' />
                    <img src='/images/KEL-new-logo-img.png' alt='killburn-engineering-client-logo' />
                    <img src='/images/navayuga-logo.png' alt='navyuga-client-logo' />
                    <img src='/images/safexpress-logo.png' alt='safexpress-client-logo' />
                    <img src='/images/relcon-logo.png' alt='relcon-client-logo' />
                    <img src='/images/om-logistics-logo.png' alt='om-logistics-client-logo' />
                    <img src='/images/lalit-pipes-logo.jpg' alt='lalit-pipes-client-logo' />
                </div>
            </div>
        </section>
    )
};

export default OurClients;