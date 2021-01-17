import React, { useContext } from 'react';

import SearchButtonContext from '../../context/search/search-button.context';

import InputSearch from '../input-search/input-search';
import SearchPlace from '../search-place/search-place';
import PlacesSearchedList from '../places-searched-list/places-searched-list';

import './search-side.css';

const SearchSide = () => {

    const { toggleSearchButton } = useContext(SearchButtonContext);
    return(
        
        <div className='search-side-container'>
            <i 
            onClick={toggleSearchButton}
            className="material-icons md-48 close"
            >close</i>
            <InputSearch/>
            <SearchPlace/>
            <PlacesSearchedList/>
        </div>
     
    )
}

export default SearchSide;