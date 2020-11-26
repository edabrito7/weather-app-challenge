import React, { useContext } from 'react';

import { weatherApiContext } from '../../context/weather-provider/weather.provider';

import './place-searched-element.css'

const PlaceSearchElement = ({city}) => {
    const weatherContext = useContext(weatherApiContext);
    const { changeLocation, changeQuery } = weatherContext;

    const RequestNewWeather = () => {
        changeQuery('search/?query=');
        changeLocation(city);
    }
    return(
        <li 
        onClick={RequestNewWeather}
        className='place-searched-element-container'
        >
            <span>{city}</span>
            <i 
            className="material-icons md-18 place-searched-arrow"
            >keyboard_arrow_right</i>
        </li>
    )
}

export default PlaceSearchElement;