import axios from 'axios';



const api = axios.create({
    baseURL: `${process.env.REACT_APP_CORS_URL}/${process.env.REACT_APP_API_BASE_URL}`,
    headers: {
        'Access-Control-Allow-Headers': 'Content-Type'
      }
})

export default api;