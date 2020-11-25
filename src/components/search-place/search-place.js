import React, { useContext } from 'react';

import { PlacesSearchedContext } from '../../context/places-searched/places-searched.provider';
import { weatherApiContext } from '../../context/weather-provider/weather.provider';

import './search-place.css';

const SearchPlace = () => {
    const placesSearched = useContext(PlacesSearchedContext);
    const weatherContext = useContext(weatherApiContext);
    
    const { add, currentCity } = placesSearched; 
    const { changeLocation } = weatherContext;
    const Actions = () => {
        console.log("New location button");
        add(currentCity);
        changeLocation(currentCity);
    }
    return(
        <button 
        onClick={Actions}
        className='search-place-button'
        >
            Search
        </button>
    )
}


export default SearchPlace;