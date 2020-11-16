import React from 'react';

import './todays-card.css';

const cardType = (type,value) => {
    switch(type) {
        case 'humidity':
            return (
                <div className='humidity-indicator white'>
                    <div 
                    className='humidity-value'
                    style={{width: `${value}%`}}
                    > 
                    </div>
                </div>
            )
        case 'wind':
            return <i className="material-icons md-18 wind-indicator">navigation</i>
        default:
            return null
    }
}



const TodaysCard = ({title, type, units, value, size}) => {
    return(
        <div className={`todays-card-container ${size}`}>
            <h1 className='todays-card-title white'>
                {title}
            </h1>
            <p className='todays-card-value white'>
                {value} {units}
            </p>
            {cardType(type,value)}
        </div>
    )
}


export default TodaysCard;