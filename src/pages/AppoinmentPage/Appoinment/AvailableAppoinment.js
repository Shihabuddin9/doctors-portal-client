import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppoinment = ({ selected, setSelected }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='text-center font-medium text-secondary text-2xl'>Available Appointments on {format(selected, 'PP')}</h1>
        </div>
    );
};

export default AvailableAppoinment;