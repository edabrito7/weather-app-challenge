import React from 'react';


import DayCard from '../day-card/day-card';

import './day-card-list.css';

const DayCardList = () => {
    return(
        <div className='day-card-list-container'>
            <DayCard 
            date='Tomorrow'
            lowerTemperature='15'
            higherTemperature='25'
            icon='s'
            />
            <DayCard 
            date='Tomorrow'
            lowerTemperature='15'
            higherTemperature='25'
            icon='s'
            />
            <DayCard 
            date='Tomorrow'
            lowerTemperature='15'
            higherTemperature='25'
            icon='s'
            />
            <DayCard 
            date='Tomorrow'
            lowerTemperature='15'
            higherTemperature='25'
            icon='s'
            />
            <DayCard 
            date='Tomorrow'
            lowerTemperature='15'
            higherTemperature='25'
            icon='s'
            />
        </div>
    )
}

export default DayCardList;