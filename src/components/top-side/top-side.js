import React, { useContext } from 'react';

import SearchButton from '../search-button/search-button';

import './top-side.css';

import useFetch from '../../services/searchLocation';
import {weatherApiContext} from '../../context/weather-provider/weather.provider';

const TopSide = () => {
  const weatherContext = useContext(weatherApiContext);
  const { changeLocation, changeLatandLog, changeQuery } = weatherContext;
    //const [location, setLocation] = useState([])

  const getGeo = () => {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition((position) =>{
            
            console.log(position.coords.longitude);
            console.log(position.coords.latitude);
            changeLocation(`${position.coords.longitude.toString()},${position.coords.latitude.toString()}`);
            changeQuery('search/?lattlong=')
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