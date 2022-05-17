import React from 'react';
import './Aboutus.scss';

const Aboutus = () => {
    return (
        <section className="about-us" id="aboutus">
            <div className="banner">
                <h3>About Us</h3>
            </div>
            <div className="about-wrap">
                <div className="about-aftrwrap">
                    <div className="about">
                        <div className='img-wrap'>
                            <img src="images/about-1.jpg" />
                        </div>
                        <p>Established in the year 2005. ASIAN CRANE SERVICE today is renowned and popular in the crane rental service industry. We operate a  YOUNG FLEET of  22 CRANES with capacities ranging from 15 TONS TO 350 TONS. In over 15 years of rental services in INDIA, we are committed to providing safe, reliable and quality crane services to support and complement our customers. We had the great privilege of providing services to multiple industrial sectors including  Steel, Power Plants, Bridgeworks, Pipeline works, Metro projects, Cement Plants, Refineries, Petrochemicals, Logistics, Pharma sector etc.</p>
                    </div>
                </div>
                <div className="about-aftrwrap">
                    <div className="about">
                        <p>In order to meet various types of JOB WORKS  at various sites our company is well equipped with various types of machinery including ALL TERRAIN CRANES, MOBILE TELESCOPIC CRANES, TRUCK MOUNTED LATTICE BOOM CRANE, PICK & CARRY CRANES, CHERRY PICKER, TRUCK MOUNTED / SELF-PROPELLED  BOOM LIFT, SCISSOR LIFTS, FORKLIFTS, HPT ETC.</p>
                        <div className='img-wrap'>
                            <img src="images/about-2.jpg" />
                        </div>
                    </div>
                </div>
                <div className="about-aftrwrap">
                    <div className="about">
                        <div className='img-wrap'>
                            <img src="images/about-3.jpg" />
                        </div>
                        <p>Having a large Fleet of different types of machinery, we offer exact machines to meet the exact requirement of clients, based on, site conditions, constraints and the work involved. We have a staff team of EXPERIENCED Engineers, Technicians and operators to ensure safe & efficient operations to achieve and meet the client’s work schedules within budget & with minimum delays.</p>
                    </div>
                </div>
                <div className="about-aftrwrap">
                    <div className="about">
                        <p>To this end, we have well trained and experienced supporting staff and our own Crane yard with in-house facilities for regular maintenance, maximise Uptime and quick response to any on-site problems or breakdowns.</p>
                        <div className='img-wrap'>
                            <img src="images/about-4.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aboutus;