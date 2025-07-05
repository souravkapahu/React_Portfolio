import axios from 'axios';
const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:7002/api/v1/';
const apiKey = import.meta.env.VITE_API_KEY

if (!baseURL) throw new Error('VITE_API_BASE_URL is not defined!');

export const apiClient = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        'x-api-key': apiKey,
    },
});