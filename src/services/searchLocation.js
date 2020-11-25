import {useState, useEffect, useRef} from 'react';
import api from './api';



export default function useFetch(query) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const prevUrl = useRef();

    console.log("Estoy en el useFetch",query)
    useEffect(() => {
        if (query === undefined) return;
        if (prevUrl.current === query) return;    
        prevUrl.current = query;
        console.log("Segui adelante Fetching",query)
        api.get(query)
        .then(response => {
            if (response.status === 200) return response;
            return setError(response);
        })
        .then((data) => {
            if (data.data?.consolidated_weather) {
                return setData(data.data)
            } else {
                setData(data.data[0])
            }
        })
        .catch(err => {
            console.log(err);
            setError(err);
        })
        .finally(() => setLoading(false))

        
    },[query])

    return { data, loading, error };
    
}