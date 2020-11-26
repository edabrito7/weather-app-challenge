import { useState, createContext } from 'react';

export const weatherApiContext = createContext({
    currentLocation: 'London',
    currentLatandLog: ['0','0'],
    currentQuery: 'search/?query=',
    changeLocation: () => {},
    changeLatandLog: () => {},
    changeQuery: () => {},
});


const WeatherProvider = ({children}) => {
    const [currentLocation, setCurrentLocation ] = useState('London');
    const [currentLatandLog, setCurrentLatandLog ] = useState(['0','0']);
    const [currentQuery, setCurrentQuery] = useState('search/?query=');

    const changeLocation = (newLocation) => {
        setCurrentLocation(newLocation);
    };

    const changeLatandLog = (newLatandLog) => {
        setCurrentLatandLog(newLatandLog);
    };

    const changeQuery = (newQuery) => {
        setCurrentQuery(newQuery);
    };

    return(
        <weatherApiContext.Provider
        value={{
            currentLocation,
            currentLatandLog,
            currentQuery,
            changeLocation,
            changeLatandLog,
            changeQuery
        }}
        >
            {children}
        </weatherApiContext.Provider>
    )

}

export default WeatherProvider;