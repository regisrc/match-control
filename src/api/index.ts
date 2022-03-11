import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_ENDPOINT,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${
      JSON.parse(sessionStorage.getItem('oidc.user:https://app.thematchcontrol.com.br:8443/realms/tmc/.well-known/openid-configuration:tmc-app-client') ?? "{}")?.access_token}`
  }
});

export default axiosInstance;
