import React, { useContext } from 'react';


import CurrentLocationContext from '../../context/current-location/current-location.context';
import { weatherApiContext } from '../../context/weather-provider/weather.provider';
import { ToFarenheit } from '../../utils/utils';
import DayCard from '../day-card/day-card';

import './day-card-list.css';

const DayCardList = () => {
    const location = useContext(CurrentLocationContext);
    const weatherApi = useContext(weatherApiContext);
    const {consolidated_weather} = location;
    const isCelcius = weatherApi.unit;

    const NextDays = consolidated_weather.slice(1).map(({min_temp,max_temp,weather_state_abbr, applicable_date}, key) => {
        const date = new Date(applicable_date);
        return(
            <DayCard
            key={key}
            date={date.toGMTString().substring(0, 10)}
            lowerTemperature={isCelcius ? min_temp.toFixed(1) : ToFarenheit(min_temp.toFixed(1))}
            higherTemperature={isCelcius ? max_temp.toFixed(1): ToFarenheit(max_temp.toFixed(1))}
            icon={weather_state_abbr}
            />
        )
    })

    return(
        <div className='day-card-list-container'>
           {NextDays}
        </div>
    )
}

export default DayCardList;