import React, { useContext } from 'react';


import CurrentLocationContext from '../../context/current-location/current-location.context';

import DayCard from '../day-card/day-card';

import './day-card-list.css';

const DayCardList = () => {
    const location = useContext(CurrentLocationContext);

    const {consolidated_weather} = location;

    const NextDays = consolidated_weather.slice(1).map(({min_temp,max_temp,weather_state_abbr, applicable_date}) => {
        const date = new Date(applicable_date);
        return(
            <DayCard
            date={date.toGMTString().substring(0, 10)}
            lowerTemperature={min_temp.toFixed(1)}
            higherTemperature={max_temp.toFixed(1)}
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