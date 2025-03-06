import axios from 'axios';
import { getToken } from '../utils/tokenStorage';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Gunakan getToken() alih-alih useContext
apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const get = async (endpoint, params = {}) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error('Error in GET request:', error);
    throw error;
  }
};

export const post = async (endpoint, data) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response;
  } catch (error) {
    console.error('Error in POST request:', error);
    throw error;
  }
};

export default apiClient;