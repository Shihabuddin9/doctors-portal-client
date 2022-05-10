import React from 'react';

const SharedButton = ({ children }) => {
    return (
        <button class="btn btn-primary uppercase font-bold text-white  bg-gradient-to-r from-secondary to-primary">{children}</button>
    );
};

export default SharedButton;