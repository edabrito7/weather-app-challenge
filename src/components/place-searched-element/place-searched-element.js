import React from 'react';

import './place-searched-element.css'

const PlaceSearchElement = ({city}) => {
    return(
        <li className='place-searched-element-container'>
            <span>{city}</span>
            <i 
            className="material-icons md-18 place-searched-arrow"
            >keyboard_arrow_right</i>
        </li>
    )
}

export default PlaceSearchElement;