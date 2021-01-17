import React from 'react';

import TemperatureButton from '../temperature-button/temperature-button';
import DayCardList from '../day-card-list/day-card-list';
import TodaysCardList from '../todays-card-list/todays-card-list';

import './main-info.css';

const MainInfo = () => {

    return(
        <div className='main-info-container'>
            <div className='main-temperature-icons'>
                <TemperatureButton toValue={true} type='°C'/>
                <TemperatureButton toValue={false} type='°F'/>
            </div>
            <DayCardList/>
            <h1 className='main-info-title'>Today’s Hightlights</h1>
            <TodaysCardList/>

        </div>
    )
}

export default MainInfo;