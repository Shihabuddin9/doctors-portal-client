import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selected, setTreatment }) => {
    const { _id, name, slots } = treatment

    const handleSubmit = (e) => {
        e.preventDefault()
        const slot = e.target.slot.value
        console.log(slot, _id, name)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                        <form onSubmit={handleSubmit}>

                            <div class="form-group mb-6">
                                <input type="text" class="form-control block w-full px-3 py-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" disabled value={format(selected, 'PP')} />
                            </div>
                            <div class="form-group mb-6">
                                <select name="slot" class="select select-bordered w-full ">
                                    {
                                        slots.map(slot => <option value={slot}>{slot}</option>)
                                    }
                                </select>
                            </div>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control block w-full px-3 py-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="Full Name" />
                            </div>

                            <div class="form-group mb-6">
                                <input type="number" name="number" class="form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                                    placeholder="Phone Number" />
                            </div>
                            <div class="form-group mb-6">
                                <input type="email" class="form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                                    placeholder="Email" />
                            </div>

                            <button type="submit" class=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                        </form>
                    </div>
                    <div class="modal-action">
                        <label for="booking-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;