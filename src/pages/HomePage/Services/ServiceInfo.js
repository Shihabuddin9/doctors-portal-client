import React from 'react';

const ServiceInfo = ({ img, cardTitle }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className=" mt-5">
                <img src={img} alt="Shoes" className="rounded-xl w-20 md:w-auto" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{cardTitle}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default ServiceInfo;