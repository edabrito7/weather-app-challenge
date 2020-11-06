import React, { useContext } from 'react';

import TopSide from '../top-side/top-side';


import './info-side.css';

import CurrentLocationContext from '../../context/current-location/current-location.context';

const InfoSide = () => {
    const location = useContext(CurrentLocationContext);
    if (location === null) return null;

    const {title} = location;
    return(
        <>    
            <TopSide/>
            <h1 className='side-bar-temperature white'>15</h1>
            <h2 className='side-bar-weather'>Shower</h2>
            <div className='date-info-container'>
                <h3 className='date grey'>Today</h3>
                <h3 className='date grey'>Fri 5 Jun</h3>
            </div>
            <span className='city grey'>
                <i className="material-icons md-18">place</i>
                {title}
            </span>
        </>
    )
}

export default InfoSide;