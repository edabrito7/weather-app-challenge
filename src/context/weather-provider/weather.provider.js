import { useState, createContext } from 'react';

export const weatherApiContext = createContext({
    currentLocation: 'London',
    currentLatandLog: ['0','0'],
    currentQuery: 'search/?query=',
    changeLocation: () => {},
    changeLatandLog: () => {},
    changeQuery: () => {},
    isCelcius: true,
    changeisCelcius: () => {},
});


const WeatherProvider = ({children}) => {
    const [currentLocation, setCurrentLocation ] = useState('London');
    const [currentLatandLog, setCurrentLatandLog ] = useState(['0','0']);
    const [currentQuery, setCurrentQuery] = useState('search/?query=');
    const [isCelcius, setisCelcius ] = useState(true);

    const changeLocation = (newLocation) => {
        setCurrentLocation(newLocation);
    };

    const changeLatandLog = (newLatandLog) => {
        setCurrentLatandLog(newLatandLog);
    };

    const changeQuery = (newQuery) => {
        setCurrentQuery(newQuery);
    };

    const changeisCelcius = (value) => {
        setisCelcius(value);
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
            isCelcius,
            changeisCelcius
        }}
        >
            {children}
        </weatherApiContext.Provider>
    )

}

export default WeatherProvider;