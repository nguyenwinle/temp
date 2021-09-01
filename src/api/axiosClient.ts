import Axios, { AxiosRequestConfig } from 'axios';

const baseURL: string = process.env.REACT_APP_API_BASE_URL || 'http://localhost:4010';
const axiosClient = Axios.create({
  baseURL,
  timeout: 600000,
} as AxiosRequestConfig);

axiosClient.interceptors.request.use(
  config => {
    const dataEnvironmentId = sessionStorage.getItem('dataEnvironmentId') as string;
    config.params = config.params || {};
    config.params.dataEnvironmentId = dataEnvironmentId;

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  response => response,
  error => {
    if (401 === error.response?.status) {
      sessionStorage.removeItem('jwt');
      window.location.href = process.env.REACT_APP_LOGIN_URL ?? '';
      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);

export { axiosClient };
