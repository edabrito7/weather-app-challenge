import React, { useContext, useState } from 'react';

import './App.css';

import Loading from './components/loading/loading';
import ErrorPage from './components/error-page/error-page';
import Side from './components/side/side';
import MainInfo from './components/main-info/main-info';
import Modal from './components/modal/modal';

import CurrentLocationContext from './context/current-location/current-location.context';
import {weatherApiContext} from './context/weather-provider/weather.provider';

import useFetch from './services/searchLocation';


const App = () => {
  const weatherApi = useContext(weatherApiContext);
  const { currentLocation,  currentQuery } = weatherApi;
  const [isOpen, setisOpen] = useState(false);
  const [isNewCity, setisNewCity] = useState(true);

  const onClose = () => {
    setisOpen(false);
  } 

  const { 
    data: searchData,
    loading: searchLoading, 
    error: searchError 
    } = useFetch(`${currentQuery}${currentLocation}`);
  
  const id = searchData?.woeid?.toString();
  const {
    data: locationData,
    loading: locationLoading,
    error: locationError
  } = useFetch(id); 

  if ( searchLoading || locationLoading ) return <Loading/>

  if ( searchError || locationError ) return <ErrorPage />

  if ( searchData === undefined && isOpen === false && isNewCity === true ) {
    setisOpen(true);
    setisNewCity(false);
  } 

  if (isNewCity === false && searchData !== undefined ) {
    setisNewCity(true);
  }
  
  return (
      <CurrentLocationContext.Provider value={locationData || null}>
        <div className="App">
          <Modal
          open={isOpen}
          close={onClose}
          >
            The city you have selected is not avaliable. 
            Our most sincere apologies.
          </Modal>
          <Side/>
          <MainInfo/>
        </div>
      </CurrentLocationContext.Provider>
  );
}

export default App;
