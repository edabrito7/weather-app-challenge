import React from 'react';

import './day-card.css';

const DayCard = ({date, lowerTemperature, higherTemperature, icon}) => {
    return(
        <div className='day-card-container'>
            <h1 className='day-card-date white'>{date}</h1>
            <div className={`day-card-image ${icon}`} alt='weather icon card'/>
            <div className='day-card-temperature-container'>
                <span className='day-card-temperature white-text'>{lowerTemperature}ºC</span>
                <span className='day-card-temperature grey'>{higherTemperature}ºC</span>
            </div>
        </div>
    )
};


export default DayCard;