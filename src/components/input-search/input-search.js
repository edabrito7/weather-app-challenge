import React from 'react';


import './input-search.css';

const InputSearch = () => {
    return(
        <div className='input-container'>
            <label className='label'>Search location:</label>
            <i className="material-icons md-18 icon">search</i>
            <input
            className='input'
            placeholder='search location'
            name='search location'
            />
            
        </div>
    )
}

export default InputSearch;