import React, { useContext } from 'react';

import CurrentLocationContext from '../../context/current-location/current-location.context';

import TodaysCard from '../todays-card/todays-card';

import './todays-card-list.css';

const TodaysCardList = () => {
    const location = useContext(CurrentLocationContext);

    const {
        humidity, 
        visibility,
        air_pressure,
        wind_direction,
        wind_direction_compass} = location.consolidated_weather[0];

    return(
        <div className='todays-card-list-container'>
            <TodaysCard
            title='Wind Status'
            type='wind'
            units='mph'
            value={wind_direction.toFixed(2)}
            size='large'
            windy={wind_direction_compass}
            />
            <TodaysCard
            title='Humidity'
            type='humidity'
            units='%'
            value={humidity}
            size='large'
            />
            <TodaysCard
            title='Visibility'
            type='visibility'
            units='miles'
            value={visibility.toFixed(2)}
            size='small'
            />
            <TodaysCard
            title='Air Pressure'
            type='air'
            units='mb'
            value={air_pressure.toFixed(1)}
            size='small'
            />
        </div>
    )
}

export default TodaysCardList;