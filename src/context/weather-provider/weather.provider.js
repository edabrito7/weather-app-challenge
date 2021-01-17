import { useState, createContext } from 'react';

export const weatherApiContext = createContext({
    currentLocation: 'London',
    currentLatandLog: ['0','0'],
    currentQuery: 'search/?query=',
    changeLocation: () => {},
    changeLatandLog: () => {},
    changeQuery: () => {},
    unit: true,
    changeUnit: () => {},
});


const WeatherProvider = ({children}) => {
    const [currentLocation, setCurrentLocation ] = useState('London');
    const [currentLatandLog, setCurrentLatandLog ] = useState(['0','0']);
    const [currentQuery, setCurrentQuery] = useState('search/?query=');
    const [unit, setUnit ] = useState(true);

    const changeLocation = (newLocation) => {
        setCurrentLocation(newLocation);
    };

    const changeLatandLog = (newLatandLog) => {
        setCurrentLatandLog(newLatandLog);
    };

    const changeQuery = (newQuery) => {
        setCurrentQuery(newQuery);
    };

    const changeUnit = (value) => {
        setUnit(value);
    }
    return(
        <weatherApiContext.Provider
        value={{
            currentLocation,
            currentLatandLog,
            currentQuery,
            changeLocation,
            changeLatandLog,
            changeQuery,
            unit,
            changeUnit
        }}
        >
            {children}
        </weatherApiContext.Provider>
    )

}

export default WeatherProvider;