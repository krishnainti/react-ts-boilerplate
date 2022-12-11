import axios from "axios";
import { store } from "Store";
import { startLoading, stopLoading } from "Store/loaderSlice";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = "123"; // get token

    store.dispatch(startLoading());

    if (token && config.headers) {
      config.headers.authorization = token;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    store.dispatch(stopLoading());
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    store.dispatch(stopLoading());
    return response;
  },
  function (error) {
    store.dispatch(stopLoading());
    return Promise.reject(error);
  }
);
