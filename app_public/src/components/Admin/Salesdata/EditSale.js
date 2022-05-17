import React, { useState, useEffect } from 'react';
import './salesdata.scss';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../Header/Header';

const EditSale = () => {
    let history = useHistory();
    if(document.cookie.indexOf('user') === -1){
        history.push("/admin/login");
    }

    let { id } = useParams();
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [inputFields, setInputFields] = useState([]);
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
    const removeOgFields = (index) => {
        let data = [...list];
        data.splice(index, 1);
        setList(data);
    };

    const setSaleDataEdit = (index, event) => {
        let data = [...list];
        data[index][event.target.name] = event.target.value;
        setList(data);
    };

    useEffect(() => {
        axios.get("http://localhost:3000/api/salelist/" + id)
            .then(res => {
                setData(res.data);
                setName(res.data.name);
                setPrice(res.data.price);
                return(
                    res.data.list.forEach(elem => {
                        setList((list) => [...list, elem]);
                    })
                )
            });
    }, []);

    const deleteSale = id => {
        axios.delete("http://localhost:3000/api/salelist/" + id)
            .then(res => {
                history.push("/admin/salesdata");
            })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const saleData = {
            name: name,
            price: price,
            list: list.concat(inputFields)
        };
        axios.put("http://localhost:3000/api/salelist/" + id, saleData)
            .then(res => {
                const { status } = res;
                if(status === 200){
                    history.push("/admin/salesdata");
                }
            })
    };

    return (
        <div className='edit-afterwrap'>
            <Header />
            <div className='edit-sale-wrap'>
                
                <div className='grid'>
                    <div className='inner-wrap'>
                        <form onSubmit={e => { onSubmit(e) }}>
                            <div className='top-wrap'>
                                <div>
                                    <label>Name: </label>
                                    <input type="text" className="name" name="name" placeholder='Name' value={name} onChange={e => setName(e.target.value)} required />
                                </div>
                                <div>
                                    <label className='pd-more'>Price: </label>
                                    <input type="text" className="price" name="price" placeholder='Price' value={price} onChange={e => setPrice(e.target.value)} required />
                                </div>
                                <a onClick={e => deleteSale(id)} className='delete-btn'><img src='/images/delete.png' alt='Delete-Button' /></a>
                            </div>
                            <div className='heading-wrap'>
                                <h3>Property</h3>
                                <h3>Value</h3>
                            </div>
                            <div className='edit-wrap'>
                                <div className='details'>
                                    <div className='list-wrap'>
                                        {
                                            list.map((val, index) => {
                                                return(
                                                    <div key={index} className='list-inner-wrap'>
                                                        <input type="text" name='title' value={val.title} onChange={e => setSaleDataEdit(index, e)} required />
                                                        <input type="text" name='desc' value={val.desc} onChange={e => setSaleDataEdit(index, e)} required />
                                                        <a onClick={e => removeOgFields(index)} className='show'><img src='/images/remove2.png' alt='Remove-button' /></a>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <h4 className='mid-ttl'>Add New Fields</h4>
                            <div className='add-wrap'>
                                <div className='details'>
                                    <div className='list-wrap'>
                                        {
                                            inputFields.map((input, index) => {
                                                return (
                                                    <div key={index} className='list-inner-wrap'>
                                                        <input type="text" name='title' value={input.title} onChange={e => setDetails(index, e)} required />
                                                        <input type="text" name='desc' value={input.desc} onChange={e => setDetails(index, e)} required />
                                                        <a onClick={e => removeFields(index)} className='show'><img src='/images/remove2.png' alt='Remove-button' /></a>
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
                            <input type="submit" className="create-btn" value="Save"></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};
    
export default EditSale;