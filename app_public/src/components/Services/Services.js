import React from 'react';
import './services.scss';

const Services = () => {
    return (
        <section className="services-afterwrap" id="services">
            <div className="banner">
                <h3>Services</h3>
            </div>
            <div className='img-afterwrap'>
                <div className='img-wrap'>
                    <h5>Boom Lift Service</h5>
                </div>
                <div className='img-wrap'>
                    <h5>Erection Service</h5>
                </div>
                <div className='img2-wrap'>
                    <div className='left-wrap'>
                        <div className='top-wrap'>
                            <h5>Lifting and Shifting</h5>
                        </div>
                        <div className='bottom-wrap'>
                            <h5>Pipeline Work</h5>
                        </div>
                    </div>
                    <div className='right-wrap'>
                        <h5>Loading and Unloading Service</h5>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Services;