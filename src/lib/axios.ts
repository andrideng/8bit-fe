import axios from 'axios';
import Cookie from 'js-cookie';

import { BASE_API_URL, COOKIES_ACCESS_TOKEN } from './constants';

axios.defaults.baseURL = BASE_API_URL;

// Add token to request header
axios.interceptors.request.use((config) => {
  const token = Cookie.get(COOKIES_ACCESS_TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axios;

export interface GenericErrorResponse {
  message: string;
  error: boolean;
}
