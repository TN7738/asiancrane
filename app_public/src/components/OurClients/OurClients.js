import React from 'react';
import './OurClients.scss';

const OurClients = () => {
    return (
        <section className="ourclients-afterwrap" id="ourclients">
            <div className="banner">
                <h3>Our Clients</h3>
            </div>
            <div className='grid'>
                <img src='/images/clients.jpg' alt='client-img' />
            </div>
        </section>
    )
};

export default OurClients;