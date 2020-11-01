import React, {useState} from 'react';

import './App.css';

import Side from './components/side/side';
import useFetch from './services/getLocation';


const App = () => {
  const [location, setLocation] = useState('london')

  const { data, loading, error } = useFetch(location);
  console.log(data);
  const getGeo = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) =>{
        
        console.log(data);
        console.log(position.coords);
        setLocation("caracas");
      })
    }
  }

  return (
    <div className="App">
      <Side/>
      <h1>My App</h1>
      <p>Data:</p>
      <button onClick={getGeo} >Get Geo</button>
    </div>
  );
}

export default App;
