import React, { useState, useEffect } from 'react';
import './salesdata.scss';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../Header/Header';

const CreateSale = () => {
    let history = useHistory();
    if(document.cookie.indexOf('user') === -1){
        history.push("/admin/login");
    }

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [inputFields, setInputFields] = useState([
        {title: '', desc: ''}
    ]);

    const setDetails = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    };

    const addFields = () => {
        let newfield = {title: '', desc: ''};
        setInputFields([...inputFields, newfield]);
    };

    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1);
        setInputFields(data);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const saleData = {
            name: name,
            price: price,
            list: inputFields
        };
        axios.post("/api/salelist/", saleData)
            .then(res => {
                history.push("/admin/salesdata");
            })
    };

    return (
        <div className='create-afterwrap'>
            <Header />
            <div className='create-sale-wrap'>
                <div className='grid'>
                    <div className='inner-wrap'>
                        <form onSubmit={e => { onSubmit(e) }}>
                            <div className='top-wrap'>
                                <div>
                                    <label>Name: </label>
                                    <input type="text" className="name" name="name" placeholder='Name' value={name} onChange={e => setName(e.target.value)} required />
                                </div>
                                <div>
                                    <label>Price: </label>
                                    <input type="text" className="price" name="price" placeholder='Price' value={price} onChange={e => setPrice(e.target.value)} required />
                                </div>
                            </div>
                            <div className='heading-wrap'>
                                <h3>Property</h3>
                                <h3>Value</h3>
                            </div>
                            <div className='create-wrap'>
                                <div className='details'>
                                    <div className='list-wrap'>
                                        {
                                            inputFields.map((input, index) => {
                                                return (
                                                    <div key={index} className='list-inner-wrap'>
                                                        <input type="text" name='title' value={input.title} onChange={e => setDetails(index, e)} required />
                                                        <input type="text" name='desc' value={input.desc} onChange={e => setDetails(index, e)} required />
                                                        <a onClick={e => removeFields(index)} className={index === 0 ? 'no-show' : 'show'}><img src={index === 0 ? '/images/remove3.png' : '/images/remove2.png'} alt='Remove-button' /></a>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='add-wrap'>
                                        <a onClick={e => addFields()} className='ad-btn'><img src='/images/add2.png' alt='Add-button' /></a>
                                    </div>
                                </div>
                            </div>
                            <input type="submit" className="create-btn" value="Create"></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
    
export default CreateSale