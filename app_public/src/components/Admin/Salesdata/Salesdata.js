import React, { useState, useEffect } from 'react';
import './salesdata.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

const Salesdata = () => {
    let history = useHistory();
    if(document.cookie.indexOf('user') == -1){
        history.push("/admin/login");
    }
    const [sales, setSales] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/salelist")
            .then(res => {
                setSales(res.data);
            })
            .catch(err => {
                setSales(null);
            });
    }, []);

    const deleteSale = id => {
        axios.delete("http://localhost:3000/api/salelist/" + id)
            .then(res => {
                let { status } = res;
                console.log(status);
                if(status === 204){
                    window.location.reload();
                }
            })
    };
    const editSale = id => {
        history.push("/admin/editsale/" + id);
    };
    const addSale = () => {
        history.push("/admin/addsale");
    };

    return (
        <div className='sales-wrap'>
            <Header />
            <div className='innerwrap'>
                <div className='grid'>
                    <div className='btn-wrap'>
                        <a onClick={e => addSale()} className='add-btn'>Add New</a>
                    </div>
                    <div className='list-wrap'>
                        {
                            sales !== null ? 
                                sales.map(data => {
                                    return (
                                        <div className='sale-item' key={data._id}>
                                            <div className='left-wrap'>
                                                <p className='sale-title'>{data.name}</p>
                                                <p className='sale-price'>{data.price}</p>
                                            </div>
                                            <div className='right-wrap'>
                                                <a onClick={e => editSale(data._id)} className='edit-btn'>Edit</a>
                                                <a onClick={e => deleteSale(data._id)} className='delete-btn'><img src='/images/delete.png' alt='Delete-Button' /></a>
                                            </div>
                                        </div>
                                    );
                                })
                            : <div className='no-data'>No Data</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Salesdata;