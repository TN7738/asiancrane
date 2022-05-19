import React from 'react';
import ATF from './ATF/ATF';
import Aboutus from './Aboutus/Aboutus';
import Equipments from './Equipments/Equipments';
import CranesForSale from './CranesForSale/CranesForSale';
import Services from './Services/Services';
import OurClients from './OurClients/OurClients';
import Contactus from './Contactus/Contactus';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <ATF />
            <Aboutus />
            <Equipments />
            <CranesForSale />
            <Services />
            <OurClients />
            <Contactus />
            <Footer />
        </div>
    )
}

export default Home