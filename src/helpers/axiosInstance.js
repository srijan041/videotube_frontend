import axios from "axios";
import { BASE_URL } from "../constants.js"

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

console.log("BASE URL: ", axiosInstance.defaults.baseURL);

export default axiosInstance;
