import axios from "axios";
import Cookies from 'js-cookie';

const authToken = Cookies.get('authToken');

const api = axios.create({
    baseURL: 'http://localhost:5500/api',
    withCredentials: true,
    headers: {
        Authorization: `Bearer ${authToken}`
    }
})

export default {
    // apiUrl: "https://restaurant-api-ih6e.onrender.com"
    apiUrl: "http://localhost:5500",
    api,
}