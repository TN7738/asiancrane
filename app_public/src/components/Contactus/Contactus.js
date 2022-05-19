import React, { useState } from 'react';
import './Contactus.scss';
import axios from 'axios';

const Contactus = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [details, setDetails] = useState("");
    const [message, setMessage] = useState("");
    const [messageClass, setMessageClass] = useState("");

    const resetData = () => {
        setName("");
        setEmail("");
        setNumber("");
        setDetails("");
    }

    const onSubmit = (e) => {
        e.preventDefault();

        let userData = {
            name: name,
            email: email,
            number: number,
            details: details
        };

        axios.get('/api/collectlist')
            .then(res => {
                const found = res.data.some(el => el.email === userData.email);
                if(found){
                    setMessage("Sorry for delay! We'll contact you shortly.");
                    setMessageClass("err");
                    resetData();
                }
                else{
                    axios.post('/api/collectlist', userData)
                        .then(res => {
                            setMessage("Thank you! We'll contact you shortly.");
                            setMessageClass("success");
                            resetData();
                        });
                }
            });
    };
    return (
        <section className="contactus-wrap" id="contact">
            <div className="banner">
                <h3>Contact Us</h3>
            </div>
            <div className="grid">
                <div className='map-wrap'>
                    <div className='left-wrap'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12666.871066637103!2d73.10207114403302!3d19.287440546388673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be796345000e3a1%3A0x757338f5bc967aa7!2sASIAN%20CRANE%20SERVICE!5e0!3m2!1sen!2sca!4v1652652226783!5m2!1sen!2sca" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='right-wrap'>
                        <h5>Asian Crane Services</h5>
                        <div className='loc-txt'>Office no.105 &amp; 106, Rajput complex, Mumbai-Nashik highway bypass, opp. Hino Motors, village Walshind, Bhiwandi, Maharashtra 421302, India</div>
                        <p>+91-9920934529</p>
                    </div>
                </div>
                <div className='contact-wrap'>
                    <h5>We would love to hear and help find a perfect solution for your crane needs.</h5>
                    <h6>Write a message for us:</h6>
                    <form onSubmit={e => { onSubmit(e) }}>
                        <p>
                            <label><input type="text" name="name" required placeholder="Name" value={name} onChange={e => setName(e.target.value)} /></label>
                            <label><input type="email" name="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /></label>
                            <label><input type="number" name="number" required placeholder="Number" value={number} onChange={e => setNumber(e.target.value)} /></label>
                        </p>
                        <p>
                            <label><span>Message: </span><textarea name="details" required value={details} onChange={e => setDetails(e.target.value)}></textarea></label>
                        </p>
                        <p>
                            <input type="submit" value="Submit" />
                        </p>
                    </form>
                    <p className={messageClass}>{message}</p>
                </div>
            </div>
        </section>
    );
}
    
export default Contactus;