import axios from "axios";

// const cache = {};

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "https://barca-store-backend.vercel.app/api/v1/"
});


export default axiosInstance;
