import React from 'react';
import PlaceSearchElement from '../place-searched-element/place-searched-element';

import PlaceSearchedElement from '../place-searched-element/place-searched-element';

import './places-searched-list.css';

const PlacesSearchedList = () => {
    return(
        <ul className='places-searched-list-container'>
            <PlaceSearchElement
            city="Santiago de Chile"
            />
            <PlaceSearchElement
            city="Panama"
            />
        </ul>
    )
}


export default PlacesSearchedList;