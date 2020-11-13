import { createContext} from 'react';


const PlacesSearchedContext = createContext({
    value: ["Santiago de Chile", "Panama", "Buenos Aires"],
    add: () => {}
});

export default PlacesSearchedContext;