import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinment = ({ selected, setSelected }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/services')
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
                            setTreatment={setTreatment}
                        ></Service>)
                    }
                </div>
                {treatment && <BookingModal
                    treatment={treatment}
                    selected={selected}
                    setTreatment={setTreatment}
                ></BookingModal>}
            </div>
        </div>
    );
};

export default AvailableAppoinment;