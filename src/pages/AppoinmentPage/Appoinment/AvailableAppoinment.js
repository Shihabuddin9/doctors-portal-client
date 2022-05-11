import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppoinment = ({ selected, setSelected }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='flex justify-center'>
            <div>
                <h1 className='text-center font-medium text-secondary text-2xl'>Available Appointments on {format(selected, 'PP')}</h1>
                <div className='grid md:grid-cols-3 grid-cols-1  gap-5 mx-10 mt-5'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableAppoinment;