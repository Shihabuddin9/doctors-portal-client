import React from 'react';
import chair from '../../../assets/images/chair.png'
import SharedButton from '../../Shared/SharedButton/SharedButton';

const Banner = () => {
    return (
        <div className="hero md:px-12 md:py-20 py-12 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="md:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="md:text-5xl text-2xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <SharedButton>GET STARTED</SharedButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;