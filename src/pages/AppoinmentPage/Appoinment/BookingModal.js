import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const BookingModal = ({ treatment, selected, setTreatment }) => {
    const { _id, name, slots } = treatment
    const [user] = useAuthState(auth)

    const handleSubmit = (e) => {
        e.preventDefault()
        const slot = e.target.slot.value
        console.log(slot, _id, name)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                        <form onSubmit={handleSubmit}>

                            <div className="form-group mb-6">
                                <input type="text" className="form-control block w-full px-3 py-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" disabled value={format(selected, 'PP')} />
                            </div>
                            <div className="form-group mb-6">
                                <select name="slot" className="select select-bordered w-full ">
                                    {
                                        slots.map((slot, index) => <option
                                            key={index}
                                            value={slot}
                                        >{slot}</option>)
                                    }
                                </select>
                            </div>
                            <div className="form-group mb-6">
                                <input type="text" className="form-control block w-full px-3 py-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" disabled value={user?.displayName || ''} />
                            </div>

                            <div className="form-group mb-6">
                                <input type="number" name="number" className="form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                                    placeholder="Phone Number" />
                            </div>
                            <div className="form-group mb-6">
                                <input type="email" className="form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                                    value={user?.email || ''} />
                            </div>

                            <button type="submit" className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                        </form>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;