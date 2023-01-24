import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Authorization': `Bearer ${ localStorage.getItem('token') }`,
        'Content-Type': 'application/json'
    }
});

export default api;
