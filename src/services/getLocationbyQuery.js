import {useState, useEffect, useRef} from 'react';
import api from './api';



export default function useFetch(query,init) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const prevInit = useRef();
    const prevUrl = useRef();


    useEffect(() => {
        if (prevUrl.current === query && prevInit.current === query) return;
        prevUrl.current = query;
        prevInit.current = init;

        api.get(`search/?query=${query}`)
        .then(response => {
            if (response.status === 200) return response;
            return setError(response);
        })
        .then(data => setData(data.data[0]))
        .catch(err => {
            console.log(err);
            setError(err);
        })
        .finally(() => setLoading(false))

        
    },[query,init])

    return { data, loading, error };
    
}