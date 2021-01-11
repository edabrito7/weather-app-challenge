import React from 'react';

import './temperature-button.css';


const TemperatureButton = ({type}) => {
    return(
        <button className='button-temperature'>
            {type}
        </button>
    )
};


export default TemperatureButton;