import React, { useContext } from 'react';


import { PlacesSearchedContext } from '../../context/places-searched/places-searched.provider';

import './input-search.css';

const InputSearch = () => {
    const input = useContext(PlacesSearchedContext);
    const {city} = input;
    return(
        <div className='input-container'>
            <label className='label'>Search location:</label>
            <i className="material-icons md-18 icon">search</i>
            <input
            onChange={(event) => city(event.target.value)}
            className='input'
            placeholder='search location'
            name='search location'
            />
            
        </div>
    )
}

export default InputSearch;