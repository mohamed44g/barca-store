import axios from "axios";

// const cache = {};

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "https://barca-store-backend-production.up.railway.app/api/v1/",
});


export default axiosInstance;
