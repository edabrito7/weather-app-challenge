import React, { useContext } from 'react';

import { PlacesSearchedContext } from '../../context/places-searched/places-searched.provider';
import { weatherApiContext } from '../../context/weather-provider/weather.provider';

import './search-place.css';

const SearchPlace = () => {
    const placesSearched = useContext(PlacesSearchedContext);
    const weatherContext = useContext(weatherApiContext);
    
    const { add, currentCity } = placesSearched; 
    const { changeLocation, changeQuery } = weatherContext;
    const Actions = () => {
        add(currentCity);
        changeQuery('search/?query=');
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