import React, { useState } from 'react';

import InfoSide from '../info-side/info-side';
import SearchSide from '../search-side/search-side';
import './side.css'

import SearchProvider from '../../context/places-searched/places-searched.provider';

import SearchButtonContext from '../../context/search/search-button.context';

const Side = () => {
    const [searchPlace, setSearchPlace] = useState(false);
    const toggleSearchButton = () => setSearchPlace(!searchPlace);
    
    return(
        <SearchProvider>
            <div className='side-bar-container'>
                <SearchButtonContext.Provider value={{
                    value: searchPlace,
                    toggleSearchButton
                }}>
                    {searchPlace ? <SearchSide/> : <InfoSide/>}
                </SearchButtonContext.Provider>
            </div>
        </SearchProvider>

    
    ) 
    
}

export default Side;