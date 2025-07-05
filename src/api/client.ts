import axios from 'axios';
const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:7002/api/v1/';

if (!baseURL) throw new Error('VITE_API_BASE_URL is not defined!');

export const apiClient = axios.create({
    baseURL,
    timeout: 10000,
});