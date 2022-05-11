import React from 'react';


const Service = ({ service }) => {
    const { name, slots } = service
    return (
        <div class="card bg-base-100 shadow-xl max-w-sm text-center">
            <div class="card-body">
                <h2 class=" text-center text-secondary text-xl">{name}</h2>
                <p>
                    {slots.length > 0 ?
                        <span>{slots[0]}</span> : <span className='text-red-500'>Try another date.</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <div class="card-actions justify-center">
                    <button disabled={slots.length === 0} class="btn btn-secondary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;