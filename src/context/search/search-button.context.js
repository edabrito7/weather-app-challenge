import { createContext } from 'react';



const SearchButtonContext = createContext({
    value: false,
    toggleSearchButton: () => {}
});


export default SearchButtonContext;