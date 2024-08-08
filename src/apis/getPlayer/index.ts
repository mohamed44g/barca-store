import axiosInstance from "../config/axois.config";

export const fetchData = async (url: string, id: string) => {
  try {
    const response = await axiosInstance.get(`${url}/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
