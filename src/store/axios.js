/** @format */
import axios from 'axios';
const Instance = axios.create({ baseURL: process.env.REACT_APP_API });

// Request interceptor
Instance.interceptors.request.use(
  function (config) {
    // Modify the request config here (e.g., add headers)
	config.headers = {
		Accept: "application/json",
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "Content-Type, Accept, X-Requesed-With, Origin",
		"Access-Control-Allow-Headers": "POST, GET, PUT, PATCH, OPTION, HEAD",
	};
    config.headers['Authorization'] = 'Bearer token123';
    return config;
  },
  function (error) {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
Instance.interceptors.response.use(
  function (response) {
    // Modify the response data here
    return response;
  },
  function (error) {
    // Handle response error
    return Promise.reject(error);
  }
);

export default axios;