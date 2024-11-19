import axios, { AxiosInstance } from 'axios';
import Cookies from "js-cookie";
import envConfig from '../config/env.config';

// Get the auth token from cookies
const authToken = Cookies.get('authToken');

// Create the Axios instance with conditional headers
const AxiosService: AxiosInstance = axios.create({
    baseURL: envConfig.API_URL,
    ...(authToken && {
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    }),
});

export default AxiosService;