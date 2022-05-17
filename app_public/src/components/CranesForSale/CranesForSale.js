import React, { useState, useEffect } from 'react';
import './CranesForSale.scss';
import axios from 'axios';

const CranesForSale = () => {
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

    return (
        <section className="cranesforsale-afterwrap" id="cranesforsale">
            <div className="banner">
                <h3>Cranes for Sale</h3>
            </div>
            <div className='grid'>
                {
                    sales.map(data => {
                        return (
                            <div className='sale-wrap' key={data._id}>
                                <div className='top-wrap'>
                                    <p className='ttl'>{data.name}</p>
                                    <p className='price'><b>Price: </b>{data.price}</p>
                                </div>
                                <div className='details-wrap'>
                                    {
                                        data.list.map((detail, indx) =>{
                                            return(
                                                <div className='detail-inner-wrap' key={indx}>
                                                    <div className='prop'>
                                                        <p>{detail.title}</p>
                                                    </div>
                                                    <div className='value'>
                                                        <p>{detail.desc}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
    
export default CranesForSale;