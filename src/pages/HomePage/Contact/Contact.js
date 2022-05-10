import React from 'react';
import contactimg from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section className='py-12' style={{
            background: `url(${contactimg})`
        }}>
            <div className='text-center'>
                <h3 className='text-secondary font-medium'>Contact Us</h3>
                <h1 className='text-white text-3xl'>Stay connected with us</h1>
            </div>
            <div>
                <div class="block p-6 max-w-md mx-auto">
                    <form>
                        <div class="form-group mb-6">
                            <input type="email" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                placeholder="Email Address" />
                        </div>
                        <div class="form-group mb-6">
                            <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                                placeholder="Subject" />
                        </div>
                        <div class="form-group mb-6">
                            <textarea
                                class="  form-control  block  w-full  px-3  py-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlTextarea13"
                                rows="3"
                                placeholder="Your message"
                            ></textarea>
                        </div>

                        <button type="submit" class="block mx-auto px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out bg-gradient-to-r from-secondary to-primary">Submit</button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Contact;