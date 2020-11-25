import { useState, createContext } from 'react';

export const weatherApiContext = createContext({
    currentLocation: 'London',
    currentLatandLog: ['0','0'],
    currentUid: '44418',
    changeLocation: () => {},
    changeLatandLog: () => {},
    changeUid: () => {},
});


const WeatherProvider = ({children}) => {
    const [currentLocation, setCurrentLocation ] = useState('London');
    const [currentLatandLog, setCurrentLatandLog ] = useState(['0','0']);
    const [currentUid, setCurrentUid] = useState('44418');

    const changeLocation = (newLocation) => {
        setCurrentLocation(newLocation);
    };

    const changeLatandLog = (newLatandLog) => {
        setCurrentLatandLog(newLatandLog);
    };

    const changeUid = (newUid) => {
        setCurrentUid(newUid);
    };

    return(
        <weatherApiContext.Provider
        value={{
            currentLocation,
            currentLatandLog,
            currentUid,
            changeLocation,
            changeLatandLog,
            changeUid
        }}
        >
            {children}
        </weatherApiContext.Provider>
    )

}

export default WeatherProvider;