import React, { useContext } from 'react';

import TopSide from '../top-side/top-side';


import './info-side.css';

import CurrentLocationContext from '../../context/current-location/current-location.context';

const InfoSide = () => {
    const location = useContext(CurrentLocationContext);
    if (location === null) return null;

    const {weather_state_name,the_temp,applicable_date} = location.consolidated_weather[0];
    const {title} = location;
    const date = new Date(applicable_date);
    return(
        <>    
            <TopSide/>
            <h1 className='side-bar-temperature white'>{the_temp.toFixed(1)}</h1>
            <h2 className='side-bar-weather'>{weather_state_name}</h2>
            <div className='date-info-container'>
                <h3 className='date grey'>Today</h3>
                <h3 className='date grey'>{date.toGMTString().substring(0, 10)}</h3>
            </div>
            <span className='city grey'>
                <i className="material-icons md-18">place</i>
                {title}
            </span>
        </>
    )
}

export default InfoSide;