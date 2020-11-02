import React, { useState } from 'react';

import './App.css';

import Side from './components/side/side';
import MainInfo from './components/main-info/main-info';

import CurrentLocationContext from './context/current-location/current-location.context';

import useFetch from './services/getLocation';


const App = () => {
  const [location, setLocation] = useState('london')

  const { data, loading, error } = useFetch(location);

  const getGeo = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) =>{
        
        console.log(position.coords);
        setLocation("caracas");
      })
    }
  }

  return (
    <CurrentLocationContext.Provider value={data}>
      <div className="App">
        <Side/>
        <MainInfo/>
      </div>
    </CurrentLocationContext.Provider>
  );
}

export default App;
