import React, { useContext } from 'react';

import { PlacesSearchedContext } from '../../context/places-searched/places-searched.provider';

import './search-place.css';

const SearchPlace = () => {
    const placesSearched = useContext(PlacesSearchedContext);
    const { add, currentCity } = placesSearched; 
    const Actions = () => {
        add(currentCity);
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