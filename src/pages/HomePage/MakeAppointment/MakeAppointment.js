import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import SharedButton from '../../Shared/SharedButton/SharedButton';

const MakeAppointment = () => {
    return (
        <section className='md:flex items-center' style={{
            background: `url(${appointment})`
        }}>
            <div>
                <img className='hidden md:block max-w-sm mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='p-6 md:p-0'>
                <h3 className='text-secondary font-bold'>Appointment</h3>
                <h1 className='my-3 text-white md:text-3xl text-2xl'>Make an appointment Today</h1>
                <p className='text-white mb-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <SharedButton>GET STARTED</SharedButton>
            </div>
        </section>
    );
};

export default MakeAppointment;