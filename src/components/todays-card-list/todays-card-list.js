import React from 'react';


import TodaysCard from '../todays-card/todays-card';

import './todays-card-list.css';

const TodaysCardList = () => {
    return(
        <div className='todays-card-list-container'>
            <TodaysCard
            title='Wind Status'
            type='wind'
            units='WSW'
            value='75'
            size='large'
            />
            <TodaysCard
            title='Humidity'
            type='humidity'
            units='%'
            value='75'
            size='large'
            />
            <TodaysCard
            title='Visibility'
            type='visibility'
            units='miles'
            value='64'
            size='small'
            />
            <TodaysCard
            title='Air Pressure'
            type='air'
            units='mb'
            value='998'
            size='small'
            />
        </div>
    )
}

export default TodaysCardList;