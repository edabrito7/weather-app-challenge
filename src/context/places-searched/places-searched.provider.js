import { useState, createContext} from 'react';


import { addPlaceToList } from './places-searched.utils';

export const PlacesSearchedContext = createContext({
    value: [],
    add: () => {},
    city: () => {},
    currentCity: ''
});


const SearchProvider = ({children}) => {
    const [ places, setPlaces] = useState([]);
    const [ currentCity, setCurrentCity ] = useState('');

    const cityTyping = typing => setCurrentCity(typing);

    const addPlace = searchedPlace => {
        setPlaces(addPlaceToList(places,searchedPlace))
    }
    return(
        <PlacesSearchedContext.Provider
        value={{
            value: places,
            add: addPlace,
            city: cityTyping,
            currentCity: currentCity,
        }}
        >
            {children}
        </PlacesSearchedContext.Provider>
    )
}



export  default SearchProvider;