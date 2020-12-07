import React, { useContext, useState } from 'react';

import SearchButton from '../search-button/search-button';

import './top-side.css';

import Modal from '../modal/modal';

import {weatherApiContext} from '../../context/weather-provider/weather.provider';
import CurrentLocationContext from '../../context/current-location/current-location.context';



const TopSide = () => {
  const weatherContext = useContext(weatherApiContext);
  const { changeLocation, changeQuery } = weatherContext;
  const location = useContext(CurrentLocationContext);
  const { consolidated_weather } = location;
  const icon = consolidated_weather[0].weather_state_abbr;
  const [isOpen, setisOpen] = useState(false)


  const onClose = () => {
    setisOpen(false);
  }

  const getGeo = () => {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition((position) =>{
            
            console.log(position);
            console.log(position.coords.latitude);
            if(position.coords.accuracy > 200) return setisOpen(true)
            changeLocation(`${position.coords.longitude.toString()},${position.coords.latitude.toString()}`);
            changeQuery('search/?lattlong=')
          })
        }
      }


  return(
        <div className='top-side-container'>

        <Modal open={isOpen} close={onClose}>
          Our accuracy is not the best. Please, try later or another device.
        </Modal>  
            <SearchButton/>
            <div 
            className='top-side-location-container' 
            onClick={getGeo}
            >
                <i className="material-icons md-18 white">my_location</i>   
            </div>
            <div className={`picture ${icon}`} alt="today's weather icon"/>
            <div className='top-side-background'/>
        </div>
        
    )
}

export default TopSide;