import axios from 'axios';
import { getItemAsync } from 'expo-secure-store';

const baseURL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:8000";

const ApiClient = () => {
  const defaultOptions = {
    baseURL
  };
  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(async (request) => {

    const accessToken = await getItemAsync('access_token');

    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }

    return request;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },

  );
  return instance;
};

export default ApiClient;
