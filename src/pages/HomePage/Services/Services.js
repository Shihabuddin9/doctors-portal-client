import React from 'react';
import ServiceInfo from './ServiceInfo';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'

const Services = () => {
    return (
        <div className='my-20'>
            <div className='text-center mb-6'>
                <span className='text-xl text-secondary'>OUR SERVICES</span>
                <h1 className='text-3xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-2'>
                <ServiceInfo img={fluoride} cardTitle="Fluoride Treatment"></ServiceInfo>
                <ServiceInfo img={cavity} cardTitle="Cavity Filling"></ServiceInfo>
                <ServiceInfo img={whitening} cardTitle="Teeth Whitening"></ServiceInfo>
            </div>

            <div class="hero mx-20 mt-14">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='ml-6 mr-20'>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn btn-primary uppercase font-bold text-white  bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;