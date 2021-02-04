import React, {useContext} from 'react';

import './temperature-button.css';

import { weatherApiContext } from '../../context/weather-provider/weather.provider';

const TemperatureButton = ({type, toValue, ...otherProps}) => {
    const weatherApi = useContext(weatherApiContext);

    const { changeisCelcius, isCelcius } = weatherApi;
    const color = isCelcius === toValue ? "light" : "dark";
    return(
        <button 
        onClick={() => changeisCelcius(toValue)}
        className={`button-temperature ${color} `}>
            {type}
        </button>
    )
};


export default TemperatureButton;