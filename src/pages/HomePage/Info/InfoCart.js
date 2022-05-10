import React from 'react';

const InfoCart = ({ img, cardTitle, bgColor, cardInfo }) => {
    return (
        <div className={`card lg:card-side shadow-xl bg-accent ${bgColor}`}>
            <figure className='ml-5 pt-3 md:pt-0'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardInfo}</p>
            </div>
        </div>
    );
};

export default InfoCart;