import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 pb-0.5 px-2 bg-base-200'>
            <InfoCart cardTitle="Opening Hours" cardInfo="Click the button to listen on Spotiwhy app." bgColor="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCart>
            <InfoCart cardTitle="Visit our location" cardInfo="Brooklyn, NY 10036, United States" bgColor="bg-accent" img={marker}></InfoCart>
            <InfoCart cardTitle="Contact us now" cardInfo="+000 123 456789" bgColor="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCart>
        </div>
    );
};

export default Info;