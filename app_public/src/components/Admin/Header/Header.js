import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div className='admin-header-wrap'>
            <div className='grid'>
                <div className='inner-wrap'>
                    <ul>
                        <li><a href='/admin/userdata'>Enquiries</a></li>
                        <li><a href='/admin/salesdata'>Manage Sales</a></li>
                    </ul>
                    <h2>Hi, Karan</h2>
                </div>
            </div>
        </div>
    )
};
    
export default Header;