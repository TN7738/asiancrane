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

    const onSubmit = (e) => {
        e.preventDefault();

        let userData = {
            name: name,
            email: email,
            number: number,
            details: details
        };

        axios.get('http://localhost:3000/api/collectlist')
            .then(res => {
                const found = res.data.some(el => el.email === userData.email);
                if(found){
                    setMessage("Sorry for delay! We'll contact you shortly.");
                    setMessageClass("err");
                }
                else{
                    axios.post('http://localhost:3000/api/collectlist', userData)
                        .then(res => {
                            setMessage("Thank you! We'll contact you shortly.");
                            setMessageClass("success");
                        });
                }
            });
    };
    return (
        <section className="contactus-wrap" id="contact-me">
            <div className="banner"><h3>Contact Us</h3></div>
            <div className="grid">
                <h5>We would love to hear and help to find a perfect solution to your crane needs.</h5>
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
        </section>
    );
}
    
export default Contactus;