import React from 'react';

const ReviewCart = ({ review }) => {
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div className='mt-12 flex justify-center items-center'>
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt="plepol" />
                        </div>
                    </div>
                    <div className='ml-4'>
                        <p>{review.name}</p>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;