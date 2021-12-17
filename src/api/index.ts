import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://app.thematchcontrol.com.br/api",
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

export default axiosInstance;