import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment';

const Appoinment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner selected={selected} setSelected={setSelected}></AppoinmentBanner>
            <AvailableAppoinment selected={selected} setSelected={setSelected}></AvailableAppoinment>
        </div>
    );
};

export default Appoinment;