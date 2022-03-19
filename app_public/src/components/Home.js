import React from 'react';
import ATF from './ATF/ATF';
import Aboutus from './Aboutus/Aboutus';
import Equipments from './Equipments/Equipments';
import Contactus from './Contactus/Contactus';

const Home = () => {
    return (
        <div>
            <ATF />
            <Aboutus />
            <Equipments />
            <Contactus />
        </div>
    )
}

export default Home