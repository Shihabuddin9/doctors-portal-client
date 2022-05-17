import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../../Shared/Loading/Loading'

const AvailableAppoinment = ({ date }) => {

    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='flex justify-center'>
            <div>
                <h1 className='text-center font-medium text-secondary text-2xl'>Available Appointments on {format(date, 'PP')}</h1>
                <div className='grid md:grid-cols-3 grid-cols-1  gap-5 mx-10 mt-5'>
                    {
                        services?.map(service => <Service
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        ></Service>)
                    }
                </div>
                {treatment && <BookingModal
                    treatment={treatment}
                    date={date}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>}
            </div>
        </div>
    );
};

export default AvailableAppoinment;