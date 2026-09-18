// components/services/api.js
import axios from 'axios';

const API = axios.create({
    baseURL: 'https://humy-backend.runasp.net/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

API.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', error);
        console.error('API Error Response:', error.response);
        console.error('API Error Data:', error.response?.data);
        return Promise.reject(error);
    }
);

export const registerUser = async (userData) => {
    try {
        console.log('Sending registration data:', userData);
        const response = await API.post('/users/register', userData);
        console.log('Registration response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Register error:', error);
        console.error('Register error response:', error.response?.data);
        throw error;
    }
};

export const checkUserExists = async (email) => {
    try {
        const response = await API.get(`/users/check/${email}`);
        return response.data;
    } catch (error) {
        console.error('Check user error:', error);
        throw error;
    }
};

export default API;