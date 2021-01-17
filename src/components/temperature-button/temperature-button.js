import React, {useContext} from 'react';

import './temperature-button.css';

import { weatherApiContext } from '../../context/weather-provider/weather.provider';

const TemperatureButton = ({type, toValue, ...otherProps}) => {
    const weatherApi = useContext(weatherApiContext);

    const { changeUnit, unit } = weatherApi;
    const color = unit===toValue ? "light" : "dark";
    return(
        <button 
        onClick={() => changeUnit(toValue)}
        className={`button-temperature ${color} `}>
            {type}
        </button>
    )
};


export default TemperatureButton;