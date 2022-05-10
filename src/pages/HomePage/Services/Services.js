import React from 'react';
import ServiceInfo from './ServiceInfo';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'
import SharedButton from '../../Shared/SharedButton/SharedButton';

const Services = () => {
    return (
        <div className='md:my-20 mt-20'>
            <div className='text-center mb-6'>
                <span className='text-xl text-secondary'>OUR SERVICES</span>
                <h1 className='text-3xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-2'>
                <ServiceInfo img={fluoride} cardTitle="Fluoride Treatment"></ServiceInfo>
                <ServiceInfo img={cavity} cardTitle="Cavity Filling"></ServiceInfo>
                <ServiceInfo img={whitening} cardTitle="Teeth Whitening"></ServiceInfo>
            </div>

            <div className=" py-20">
                <div className="md:flex justify-between items-center md:mx-20 mx-6">
                    <div className='mx-5 md:mx-0'>
                        <img src={treatment} className="md:max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='md:ml-12 mt-4 md:mt-0'>
                        <h1 className="md:text-4xl text-xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <SharedButton>GET STARTED</SharedButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;