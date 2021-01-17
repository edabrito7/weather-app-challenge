import React, { useContext } from 'react';

import { weatherApiContext } from '../../context/weather-provider/weather.provider';

import './day-card.css';

const DayCard = ({date, lowerTemperature, higherTemperature, icon}) => {
    const weatherApi = useContext(weatherApiContext);
    const isCelcius = weatherApi.unit;
    
    return(
        <div className='day-card-container'>
            <h1 className='day-card-date white'>{date}</h1>
            <div className={`day-card-image ${icon}`} alt='weather icon card'/>
            <div className='day-card-temperature-container'>
                <span className='day-card-temperature white-text'>{lowerTemperature}{isCelcius ? "ºC" : "ºF"}</span>
                <span className='day-card-temperature grey'>{higherTemperature}{isCelcius ? "ºC" : "ºF"}</span>
            </div>
        </div>
    )
};


export default DayCard;