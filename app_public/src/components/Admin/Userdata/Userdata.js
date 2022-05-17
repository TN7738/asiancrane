import React, { useState } from 'react';
import axios from 'axios';
import './userdata.scss';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

const Userdata = () => {
    let history = useHistory();
    if(document.cookie.indexOf('user') == -1){
        history.push("/admin/login");
    }
    const [enquiries, setEnquiries] = useState(null);
    React.useEffect(() => {
        axios.get("http://localhost:3000/api/collectlist")
            .then(res => {
                setEnquiries(res.data);
            })
            .catch(err => {
                setEnquiries(null);
            });
    }, []);

    const deleteEnquiry = (e) => {
        const enqId = e.target.getAttribute('data-attr');
        axios.delete(`http://localhost:3000/api/collectlist/${enqId}`)
            .then(res => {
                axios.get("http://localhost:3000/api/collectlist")
                    .then(res => {
                        setEnquiries(res.data);
                    })
                    .catch(err => {
                        setEnquiries(null);
                    });
            });
    };

    const changeReadStatus = (el) => {
        const enqId = el._id;
        const usrData = {
            name: el.name,
            email: el.email,
            number: el.number,
            details: el.details,
            readFlag: !el.readFlag
        };
        axios.put(`http://localhost:3000/api/collectlist/${enqId}`, usrData)
            .then(res => {
                axios.get("http://localhost:3000/api/collectlist")
                    .then(res => {
                        setEnquiries(res.data);
                    })
                    .catch(err => {
                        setEnquiries(null);
                    });
            });
    };
    if(!enquiries){
        return(
            <div className="enq-parent-wrap">
                <h1>Sorry! No enquiries yet :/</h1>
            </div>
        );
    }
    return (
        <div className='enq-afterwrap'>
            <Header />
            <div className="enq-parent-wrap">
                <ul>
                    {
                        enquiries.map(elem => {
                            return(
                                <li key={elem._id}>
                                    <div className="left-wrap">
                                        <p><b>Name: </b><span>{elem.name}</span></p>
                                        <p><b>Email: </b><span>{elem.email}</span></p>
                                        <p><b>Phone: </b><span>{elem.number}</span></p>
                                        <p><b>Message: </b><span>{elem.details}</span></p>
                                    </div>
                                    <div className="right-wrap">
                                        <a data-attr={elem._id} onClick={e => deleteEnquiry(e)}>Delete</a>
                                        <p>
                                            <input type="checkbox" id="readFlag" name="readFlag" value="readFlag" checked={elem.readFlag} onChange={e => changeReadStatus(elem)} />
                                            <label htmlFor="readFlag">Read</label>
                                        </p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Userdata