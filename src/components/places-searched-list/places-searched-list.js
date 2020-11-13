import React, { useContext } from 'react';

import { PlacesSearchedContext } from '../../context/places-searched/places-searched.provider';

import PlaceSearchedElement from '../place-searched-element/place-searched-element';

import './places-searched-list.css';

const PlacesSearchedList = () => {
    const places = useContext(PlacesSearchedContext);
    const { value } = places;

    const PlacesMapping = value.map((place,id) => {

        return <PlaceSearchedElement key={id} city={place}/>
    })
    return(
        <ul className='places-searched-list-container'>
            {PlacesMapping}
        </ul>
    )
}


export default PlacesSearchedList;