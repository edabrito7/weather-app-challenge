import React, { useState } from 'react';

import SearchButton from '../search-button/search-button';

import './top-side.css';

import useFetch from '../../services/getLatLong';

const TopSide = () => {
    const [location, setLocation] = useState(null)

    const { data, loading, error} = useFetch(location);
    console.log(data);

    const getGeo = () => {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition((position) =>{
            
            console.log(position.coords.longitude);
            console.log(position.coords.latitude);
            setLocation([position.coords.latitude,position.coords.longitude])
            //setLocation([48.85341,2.3488])
            
          })
        }
      }


    return(
        <div className='top-side-container'>
            <SearchButton/>
            <div 
            className='top-side-location-container' 
            onClick={getGeo}
            >
                <i className="material-icons md-18 white">my_location</i>   
            </div>
            <div className='top-side-background'/>
        </div>
        
    )
}

export default TopSide;