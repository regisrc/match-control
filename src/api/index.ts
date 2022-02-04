import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://10.1.1.20/api",
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

export default axiosInstance;