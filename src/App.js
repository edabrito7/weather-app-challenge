import React, { useState } from 'react';

import './App.css';

import Loading from './components/loading/loading';
import ErrorPage from './components/error-page/error-page';
import Side from './components/side/side';
import MainInfo from './components/main-info/main-info';

import CurrentLocationContext from './context/current-location/current-location.context';

import useFetch from './services/searchLocation';


const App = () => {
  const [location, setLocation] = useState('buenos aires')

 {/* const { 
    data: searchData,
    loading: searchLoading, 
    error: searchError 
    } = useFetch(`search/?query=${location}`);
  
  const id = searchData?.woeid || '44418'
  
  const {
    data: locationData,
    loading: locationLoading,
    error: locationError
  } = useFetch(`${id}`); */}


 // if ( searchLoading || locationLoading ) return <h1>Loading...</h1>

 // if ( searchError || locationError ) return <h1>Something went wrong..</h1>

 // console.log("Location",locationData);
  return (
    <CurrentLocationContext.Provider value={"Buenos Aires"}>
      <div className="App">
        <Side/>
        <MainInfo/>
      </div>
    </CurrentLocationContext.Provider>
  );
}

export default App;
