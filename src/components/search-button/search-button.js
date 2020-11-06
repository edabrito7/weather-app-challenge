import React, {useContext} from 'react';


import SearchButtonContext from '../../context/search/search-button.context';

import './search-button.css';



const SearchButton = () => {
    const { toggleSearchButton } = useContext(SearchButtonContext);
    return(
        
        <button 
            className='search-button'
            onClick={toggleSearchButton}
            >
                Search for a place
        </button>
        
    )
}

export default SearchButton;