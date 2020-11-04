import React, { useState } from 'react';

import './App.css';

import Side from './components/side/side';
import MainInfo from './components/main-info/main-info';

import CurrentLocationContext from './context/current-location/current-location.context';

import useFetch from './services/getLocationbyQuery';


const App = () => {
  const [location, setLocation] = useState('london')

  const { data, loading, error } = useFetch(location,null,'query');


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
