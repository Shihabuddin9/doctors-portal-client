import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import ReviewCart from './ReviewCart';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: "",
            location: "California",
            img: people1
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: "",
            location: "California",
            img: people2
        },
        {
            _id: 3,
            name: "Winson Herry",
            review: "",
            location: "California",
            img: people3
        }
    ]
    return (
        <section className='my-14 mx-3'>
            <div className='flex justify-between items-center mb-7'>
                <div>
                    <h3 className='text-secondary text-md font-bold'>Testimonial</h3>
                    <h1 className='md:text-3xl text-xl mt-2'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='lg:w-48 w-20' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-2'>
                {
                    reviews.map(review => <ReviewCart
                        key={review._id}
                        review={review}
                    ></ReviewCart>)
                }
            </div>
        </section>
    );
};

export default Testimonial;